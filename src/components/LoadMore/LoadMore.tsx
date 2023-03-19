import React from 'react'
import { Button } from 'antd'

import classes from './LoadMore.module.scss'

type Props = {
  showMoreTickets: () => void
  shownTickets: number
  ticketsAmount: number
}

function LoadMore({ showMoreTickets, shownTickets, ticketsAmount }: Props) {
  if (shownTickets >= ticketsAmount) {
    return null
  }
  return (
    <div className={classes.buttonContainer}>
      <Button size="large" type="primary" onClick={() => showMoreTickets()} className={classes.button}>
        Показать еще 5 билетов...
      </Button>
    </div>
  )
}

export default LoadMore
