import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

import AviasalesService from '../../services/AviasalesService'

const aviasalesService = new AviasalesService()

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
  const res = await aviasalesService.getTickets()
  return res
})

let ticketId = 0

const initialState = {
  tickets: {},
  status: 'idle',
  error: null,
  shownTickets: 5,
  stop: false,
}

export const ticketsListSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    showMoreTickets(state) {
      state.shownTickets += 5
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        action.payload.tickets.forEach((ticket) => {
          state.tickets[ticketId] = { ...ticket, id: ticketId }
          ticketId++
        })
        state.stop = action.payload.stop
        state.status = 'iddle'
      })
  },
})

// фильтр по пересадкам

const filteredItems = (array, filters, key, maxValue, randPlus) => {
  const maxTransfers = Math.max(...filters)
  const minTransfers = Math.min(...filters)
  return array.filter((ticket) => {
    let currTicket
    if (key === undefined) {
      currTicket = ticket
    } else {
      currTicket = ticket[key] ? ticket[key] : ticket.segments[0][key]
    }

    const stopsCount = ticket.segments[0].stops.length
    if (filters.length === 5 || filters.length === 0) {
      return maxValue ? currTicket <= maxValue + randPlus : currTicket
    }
    if (filters.length === 1) {
      return maxValue ? currTicket <= maxValue + randPlus && stopsCount === maxTransfers : stopsCount === maxTransfers
    }

    return maxValue
      ? currTicket <= maxValue + randPlus && stopsCount <= maxTransfers && stopsCount >= minTransfers
      : stopsCount <= maxTransfers && stopsCount >= minTransfers
  })
}

const selectTicketsItems = (state) => state.tickets.tickets

export const selectTickets = createSelector(selectTicketsItems, (tickets) => Object.values(tickets))

export const selectTicketsIds = createSelector(
  selectTickets,

  (tickets) => tickets.map((ticket) => ticket.id)
)

export const selectFilteredTickets = createSelector(
  selectTickets,
  (state) => state.filters,

  (tickets, filters) => {
    const { price, transfers } = filters

    if (price === 'cheap') {
      let cheap = 50000
      tickets.forEach((ticket) => {
        if (ticket.price < cheap) {
          cheap = ticket.price
        }
      })
      return filteredItems(tickets, transfers, 'price', cheap, 10000)
    }

    if (price === 'fast') {
      let maxDuration = 1000
      tickets.forEach((ticket) => {
        if (ticket.segments[0].duration < maxDuration) {
          maxDuration = ticket.segments[0].duration
        }
      })
      return filteredItems(tickets, transfers, 'duration', maxDuration, 60)
    }

    return filteredItems(tickets, transfers)
  }
)

export const selectFilteredTicketsIds = createSelector(selectFilteredTickets, (fiilteredTickets) =>
  fiilteredTickets.map((ticket) => ticket.id)
)

export const { showMoreTickets } = ticketsListSlice.actions

export default ticketsListSlice.reducer
