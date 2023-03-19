import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const transferFilters = [
  { name: 'all', label: 'Все', count: 4 },
  { name: 'no-transfers', label: 'Без пересадок', count: 0 },
  { name: '1transfer', label: '1 пересадка', count: 1 },
  { name: '2transfer', label: '2 пеpесадки', count: 2 },
  { name: '3transfer', label: '3 пеpесадки', count: 3 },
]

export interface FiltersState {
  transfers: number[]
  price: string
}

const initialState: FiltersState = {
  transfers: [],
  price: 'cheap',
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    priceFilterChanged(state, action: PayloadAction<string>) {
      state.price = action.payload
    },
    transferFilterChanged: {
      reducer(state, action: PayloadAction<{ filterName: number; changeType: string }>) {
        const { filterName, changeType } = action.payload
        const { transfers } = state
        switch (changeType) {
          case 'added': {
            if (!transfers.includes(filterName) && filterName !== 4) {
              if (transfers.length === 3) {
                transfers.push(4)
              }
              transfers.push(filterName)
            } else if (filterName === 4) {
              transfers.push(...transferFilters.map((el) => el.count))
            }
            break
          }
          case 'removed': {
            if (filterName === 4) {
              transfers.length = 0
            }
            state.transfers = transfers.filter((currName) => currName !== filterName && currName !== 4)

            break
          }

          default:
            return state
        }
        return state
      },
      prepare(filterName: number, changeType: string) {
        return {
          payload: { filterName, changeType },
        }
      },
    },
  },
})

export const { transferFilterChanged, priceFilterChanged } = filtersSlice.actions
export default filtersSlice.reducer
