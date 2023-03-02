const selectFilteredTickets = (state, filters) => {
  const { price, transfers } = filters

  if (price === 'cheap') {
    const sorted = Object.entries(state).sort((a, b) => a[1].price - b[1].price)
    if (transfers.length > 0) {
      return sorted.filter((el) => transfers.includes(el[1].segments[0].stops.length)).map((el) => el[0])
    }
    return sorted.map((el) => el[0])
  }
  if (price === 'fast') {
    const sorted = Object.entries(state).sort((a, b) => a[1].segments[0].duration - b[1].segments[0].duration)
    if (transfers.length > 0) {
      return sorted.filter((el) => transfers.includes(el[1].segments[0].stops.length)).map((el) => el[0])
    }
    return sorted.map((el) => el[0])
  }
  if (transfers.length > 0) {
    return Object.entries(state)
      .filter((el) => transfers.includes(el[1].segments[0].stops.length))
      .map((el) => el[0])
  }
  return Object.keys(state)
}
export default selectFilteredTickets
