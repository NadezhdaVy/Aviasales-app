import { createSlice } from '@reduxjs/toolkit'

import fetchTickets from '../actions/fetchTickets'

const initialState = {
  tickets: [],
  status: 'loading',
  error: null,
  stop: false,
  price: '',
}

export const ticketsListSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, () => {
        //  state.status = 'loading'
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.tickets.push(...action.payload.tickets)
        state.stop = action.payload.stop
        state.status = 'idle'
        state.error = null
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.error = action.error
        state.status = 'idle'
      })
  },
})

export default ticketsListSlice.reducer
