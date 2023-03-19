import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './redux/store'
import './index.scss'
import App from './components/App'
import fetchTickets from './redux/actions/fetchTickets'

store.dispatch(fetchTickets())
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
