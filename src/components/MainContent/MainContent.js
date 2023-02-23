import React from 'react'

import TiketsList from '../TicketsList'
import PriceFilters from '../PriceFilters'

import classes from './MainContent.module.scss'

export default function MainContent() {
  return (
    <div className={classes.MainContent}>
      <PriceFilters />
      <TiketsList />
    </div>
  )
}
