import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { showMoreTickets, selectFilteredTicketsIds } from '../TicketsList/TicketsListSlice'
import TiketsList from '../TicketsList'
import { PriceFilters } from '../Filters'

import classes from './MainContent.module.scss'

export default function MainContent() {
  const ticketsState = useSelector((state) => state.tickets)
  const dispatch = useDispatch()
  const onClick = () => dispatch(showMoreTickets())
  const ticketIds = useSelector(selectFilteredTicketsIds)
  const className = ticketIds.length - 5 >= ticketsState.shownTickets ? classes.button : classes.hidden

  return (
    <div className={classes.MainContent}>
      <PriceFilters />
      <TiketsList />
      <div className={classes['button-container']}>
        <button onClick={onClick} type="button" className={className}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ...
        </button>
      </div>
    </div>
  )
}
