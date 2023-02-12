import React from 'react'

import TiketsList from '../TicketsList'
import PriceFilters from '../PriceFilters'

import classes from './MainContent.module.scss'

export default class MainContent extends React.Component {
  render() {
    return (
      <div className={classes.MainContent}>
        <PriceFilters />
        <TiketsList />
        <div className={classes['button-container']}>
          <button type="button" className={classes.button}>
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </button>
        </div>
      </div>
    )
  }
}
