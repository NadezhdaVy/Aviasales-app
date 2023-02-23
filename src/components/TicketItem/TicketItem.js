import React from 'react'
import { Card, Descriptions } from 'antd'
import { useSelector } from 'react-redux'

import { suffix, convertTime } from '../../utils'

import classes from './TicketItem.module.scss'

export default function TicketItem({ id }) {
  const ticket = useSelector((state) => state.tickets.tickets[id])

  const convertPrice = (price) => {
    const numberToString = String(price)
    const first = numberToString.slice(0, 2)
    const last = numberToString.slice(-3)
    return `${first} ${last}p`
  }

  const renderTicket = (tick) => (
    <Descriptions column={{ xxs: 7 }} className={classes.descriptions} layout="vertical" size="small">
      <Descriptions.Item span={1} className={classes.description} label={`${tick.origin}-${tick.destination}`}>
        {convertTime(tick.date)}
      </Descriptions.Item>
      <Descriptions.Item className={classes.description} label="В ПУТИ">
        {convertTime(tick.duration)}
      </Descriptions.Item>
      <Descriptions.Item
        className={classes.description}
        label={`${tick.stops.length}  ${suffix('Пересад', tick.stops.length)}`}
      >
        {tick.stops.join(' ')}
      </Descriptions.Item>
    </Descriptions>
  )

  return (
    <Card
      hoverable
      className={classes.TicketItem}
      title={
        <div className={classes.head}>
          <span className={classes['head-price']}>{convertPrice(ticket.price)}</span>
          <img
            alt="carrier"
            src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
            className={classes['head-carrier']}
          />
        </div>
      }
    >
      {renderTicket(ticket.segments[0])}
      {renderTicket(ticket.segments[1])}
    </Card>
  )
}
