import { createAsyncThunk } from '@reduxjs/toolkit'

import { ResponseAllTickets } from '../slices/TicketsSlice'
import { AppDispatch } from '../store'
import AviasalesService from '../../services/AviasalesService'
import BaseService from '../../services/BaseService'

const aviasalesService = new AviasalesService()
const baseService = new BaseService()

type MyError = {
  message: string
}

const fetchTickets = createAsyncThunk<ResponseAllTickets, undefined, { dispatch: AppDispatch; rejectValue: MyError }>(
  'tickets/fetchTickets',
  async (_, { dispatch, rejectWithValue }) => {
    if (!aviasalesService.currId) {
      aviasalesService.currId = await aviasalesService.getId()
    }
    const id = aviasalesService.currId
    console.log(id)
    const url = baseService.createUrl('tickets', [id])
    const response = await fetch(url)
    if (!response.ok) {
      if (response.status === 500) {
        dispatch(fetchTickets())
      }
      return rejectWithValue({ message: response.statusText })
    }
    const body = await response.json()

    if (!body.stop) {
      dispatch(fetchTickets())
    }

    return body
  }
)
export default fetchTickets
