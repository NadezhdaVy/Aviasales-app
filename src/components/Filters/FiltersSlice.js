import { createSlice } from '@reduxjs/toolkit'

export const transferFilters = [
  { name: 'all', label: 'Все' },
  { name: 'no-transfers', label: 'Без пересадок' },
  { name: '1transfer', label: '1 пересадка' },
  { name: '2transfer', label: '2 пеpесадки' },
  { name: '3transfer', label: '3 пеpесадки' },
]

const initialState = {
  transfers: [],
  price: 'cheap',
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    priceFilterChanged(state, action) {
      state.price = action.payload
    },
    transferFilterChanged: {
      reducer(state, action) {
        const { filterName, changeType } = action.payload
        const { transfers } = state
        switch (changeType) {
          case 'added': {
            if (!transfers.includes(filterName) && filterName !== 'all') {
              if (transfers.length === 3) {
                transfers.push('all')
              }
              transfers.push(filterName)
            } else if (filterName === 'all') {
              transfers.push(...transferFilters.map((el) => el.name))
            }
            break
          }
          case 'removed': {
            if (filterName === 'all') {
              transfers.length = 0
            }
            state.transfers = transfers.filter((currName) => currName !== filterName && currName !== 'all')

            break
          }

          default:
            return state
        }
        return state
      },
      prepare(filterName, changeType) {
        return {
          payload: { filterName, changeType },
        }
      },
    },
  },
})

export const { transferFilterChanged, priceFilterChanged } = filtersSlice.actions
export default filtersSlice.reducer
