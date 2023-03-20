import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TicketInterface } from '../../ts/interfaces'
import fetchTickets from '../actions/fetchTickets'

export interface ResponseAllTickets {
  tickets: TicketInterface[]
  stop: boolean
}

interface State {
  tickets: TicketInterface[]
  status: 'loading' | 'succeeded' | 'failed' | 'idle'
  error: null | string
  stop: boolean
  price: string
}

const initialState: State = {
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
      .addCase(fetchTickets.fulfilled, (state, action: PayloadAction<ResponseAllTickets>) => {
        state.tickets.push(...action.payload.tickets)
        state.stop = action.payload.stop
        state.status = 'idle'
        state.error = null
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.message
        } else if (action.error.message) {
          state.error = action.error.message
        } else {
          state.error = 'error'
        }

        state.status = 'idle'
      })
  },
})

export default ticketsListSlice.reducer
