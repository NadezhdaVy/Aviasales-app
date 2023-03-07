import { configureStore } from '@reduxjs/toolkit'

import filtersReducer from './slices/FiltersSlice'
import TicketsListReducer from './slices/TicketsSlice'

export default configureStore({
  reducer: {
    filters: filtersReducer,
    tickets: TicketsListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
})
