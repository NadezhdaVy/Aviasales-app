import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
          state.tickets[ticketId++] = ticket
        })
        state.stop = action.payload.stop
        state.status = 'iddle'
      })
  },
})

export const { showMoreTickets } = ticketsListSlice.actions

export default ticketsListSlice.reducer
