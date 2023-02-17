import React from 'react'
import { useDispatch } from 'react-redux'

import { showMoreTickets } from '../TicketsList/TicketsListSlice'
import TiketsList from '../TicketsList'
import { PriceFilters } from '../Filters'

import classes from './MainContent.module.scss'

export default function MainContent() {
  const dispatch = useDispatch()
  const onClick = () => dispatch(showMoreTickets())

  return (
    <div className={classes.MainContent}>
      <PriceFilters />
      <TiketsList />
      <div className={classes['button-container']}>
        <button onClick={onClick} type="button" className={classes.button}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ...
        </button>
      </div>
    </div>
  )
}
