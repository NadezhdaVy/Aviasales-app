import React from 'react'
import { Button } from 'antd'

import classes from './LoadMore.module.scss'

function LoadMore({ showMoreTickets, shownTickets, ticketsAmount }) {
  if (shownTickets >= ticketsAmount) {
    return null
  }
  return (
    <div className={classes['button-container']}>
      <Button size="large" type="primary" onClick={() => showMoreTickets()} className={classes.button}>
        Показать еще 5 билетов...
      </Button>
    </div>
  )
}

export default LoadMore
