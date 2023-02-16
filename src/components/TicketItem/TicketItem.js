import React from 'react'
import { Card, Descriptions } from 'antd'
import format from 'date-fns/format'

import classes from './TicketItem.module.scss'

export default class TicketItem extends React.Component {
  convertTime = (date) => {
    if (Number(date)) {
      const minutes = Math.floor(date / 60)
      const seconds = Math.round(date % 60)

      return `${minutes}ч  ${seconds}м`
    }
    return format(new Date(date), 'hh : mm')
  }

  suffix = (word, count) => {
    if (count === 0) {
      return `${word}ок`
    }
    if (count === 1) {
      return `${word}ка`
    }
    return `${word}ки`
  }

  convertPrice = (price) => {
    const numberToString = String(price)
    const first = numberToString.slice(0, 2)
    const last = numberToString.slice(-3)
    return `${first} ${last}p`
  }

  renderTicket = (ticket) => (
    <Descriptions className={classes.descriptions} layout="vertical" size="small">
      <Descriptions.Item className={classes.description} label={`${ticket.origin}-${ticket.destination}`}>
        {this.convertTime(ticket.date)}
      </Descriptions.Item>
      <Descriptions.Item className={classes.description} label="В ПУТИ">
        {this.convertTime(ticket.duration)}
      </Descriptions.Item>
      <Descriptions.Item
        className={classes.description}
        label={`${ticket.stops.length}  ${this.suffix('Пересад', ticket.stops.length)}`}
      >
        {ticket.stops.join(' ')}
      </Descriptions.Item>
    </Descriptions>
  )

  render() {
    const { price, carrier, segments } = this.props

    return (
      <Card
        hoverable
        className={classes.TicketItem}
        title={
          <div className={classes.head}>
            <span className={classes['head-price']}>{this.convertPrice(price)}</span>
            <span className={classes['head-carrier']}>{carrier}</span>
          </div>
        }
      >
        {this.renderTicket(segments[0])}
        {this.renderTicket(segments[1])}
      </Card>
    )
  }
}
