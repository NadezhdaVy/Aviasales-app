import { createSelector } from '@reduxjs/toolkit'

export const selectTicketsItems = (state) => state.tickets.tickets

export const selectTicketsIds = createSelector(selectTicketsItems, (tickets) => Object.keys(tickets))

export const filterByTransfers = createSelector(
  selectTicketsItems,
  selectTicketsIds,

  (state) => state.filters,

  (tickets, ids, filters) => {
    const { transfers } = filters
    if (transfers.length > 0) {
      return ids.filter((id) => {
        const ticketTransfers = tickets[id].segments[0].stops.length
        return transfers.includes(ticketTransfers)
      })
    }
    return ids
  }
)

export const selectFilteredIds = createSelector(
  filterByTransfers,
  selectTicketsItems,
  (state) => state.filters.price,
  (filteredIds, allTickets, price) => {
    if (price === 'cheap') {
      const sorted = Object.entries(allTickets)
        .sort((a, b) => a[1].price - b[1].price)
        .map((el) => el[0])
      return sorted.filter((el) => filteredIds.includes(el))
    }
    if (price === 'fast') {
      const sorted = Object.entries(allTickets)
        .sort((a, b) => a[1].segments[0].duration - b[1].segments[0].duration)
        .map((el) => el[0])
      return sorted.filter((el) => filteredIds.includes(el))
    }
    return filteredIds
  }
)
