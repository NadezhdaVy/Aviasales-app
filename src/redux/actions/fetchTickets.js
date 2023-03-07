import { createAsyncThunk } from '@reduxjs/toolkit'

import AviasalesService from '../../services/AviasalesService'

const aviasalesService = new AviasalesService()

const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (arg, { dispatch, rejectWithValue }) => {
  try {
    const res = await aviasalesService.getTickets()

    if (!res.stop) {
      dispatch(fetchTickets())
    }

    return res
  } catch (e) {
    if (!e.message === 500) {
      throw e
    }

    dispatch(fetchTickets())
    return rejectWithValue(e.response.data)
  }
})
export default fetchTickets
