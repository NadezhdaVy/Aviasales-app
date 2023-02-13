import { configureStore } from '@reduxjs/toolkit'

import filtersReducer from './components/Filters/FiltersSlice'

export default configureStore({
  reducer: {
    filters: filtersReducer,
  },
})
