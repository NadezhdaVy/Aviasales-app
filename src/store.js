import { configureStore } from '@reduxjs/toolkit'

import enhancerMiddleware from './enhancers/middleware'
import filtersReducer from './components/Filters/FiltersSlice'
import TicketsListReducer from './components/TicketsList/TicketsListSlice'

export default configureStore({
  reducer: {
    filters: filtersReducer,
    tickets: TicketsListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(enhancerMiddleware),
})
