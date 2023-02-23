import { createAsyncThunk } from '@reduxjs/toolkit'

import AviasalesService from '../../services/AviasalesService'

const aviasalesService = new AviasalesService()

const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (arg, { dispatch, rejectWithValue }) => {
  let res
  try {
    res = await aviasalesService.getTickets()

    if (!res.stop) {
      dispatch(fetchTickets())
      return res
    }
  } catch (e) {
    if (!e.response.status === 500) {
      throw e
    } else {
      dispatch(fetchTickets())
    }

    return rejectWithValue(e.response.data)
  }
  return res
})
export default fetchTickets
