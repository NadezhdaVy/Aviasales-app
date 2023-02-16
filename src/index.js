import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import AviasalesService from './services/AviasalesService'
import store from './store'
import './index.scss'
import App from './components/App'
import { fetchTickets } from './components/TicketsList/TicketsListSlice'

const aviasalesService = new AviasalesService()
store.dispatch(fetchTickets())

const getAll = () => {
  aviasalesService.getTickets().then((res) => {
    if (!res.stop) {
      getAll()

      store.dispatch(fetchTickets())
    }

    return res
  })
}
getAll()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
