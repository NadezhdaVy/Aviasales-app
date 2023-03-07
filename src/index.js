import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './redux/store'
import './index.scss'
import App from './components/App'
import fetchTickets from './redux/actions/fetchTickets'

store.dispatch(fetchTickets())
// const aviasalesService = new AviasalesService()
// const getAll = () => {
//  aviasalesService.getTickets().then((res) => {
//    if (!res.stop) {
//      getAll()

//      store.dispatch(fetchTickets())
//    }

//    return res
//  })
// }

// useEffect(() => {
//  getAll()
// }, [])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
