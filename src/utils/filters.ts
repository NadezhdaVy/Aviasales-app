import { FiltersState } from '../redux/slices/FiltersSlice'
import { TicketInterface } from '../ts/interfaces'

const selectFilteredTickets = (state: TicketInterface[], filters: FiltersState) => {
  const { price, transfers } = filters

  if (price === 'cheap') {
    const sorted = Object.values(state).sort((a, b) => a.price - b.price)
    if (transfers.length > 0) {
      return sorted.filter((el) => transfers.includes(el.segments[0].stops.length))
    }
    return sorted
  }
  if (price === 'fast') {
    const sorted = Object.values(state).sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    if (transfers.length > 0) {
      return sorted.filter((el) => transfers.includes(el.segments[0].stops.length))
    }
    return sorted
  }
  if (transfers.length > 0) {
    return Object.values(state).filter((el) => transfers.includes(el.segments[0].stops.length))
  }
  return state
}
export default selectFilteredTickets
