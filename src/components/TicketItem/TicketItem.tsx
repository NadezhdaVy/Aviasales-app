import * as React from 'react'
import { Card, Descriptions } from 'antd'

import { TicketInterface, Segment } from '../../ts/interfaces'
import { suffix, convertTime } from '../../utils'

import classes from './TicketItem.module.scss'

interface Props {
  ticket: TicketInterface
}

function TicketItem({ ticket }: Props) {
  const convertPrice = (price: number) => {
    const numberToString = String(price)
    const first = numberToString.slice(0, 2)
    const last = numberToString.slice(-3)
    return `${first} ${last}p`
  }

  const renderTicket = (tick: Segment) => (
    <Descriptions column={{ xs: 7 }} className={classes.Descriptions} layout="vertical" size="small">
      <Descriptions.Item span={1} className={classes.Description} label={`${tick.origin}-${tick.destination}`}>
        {convertTime(tick.date)}
      </Descriptions.Item>
      <Descriptions.Item className={classes.Description} label="В ПУТИ">
        {convertTime(tick.duration)}
      </Descriptions.Item>
      <Descriptions.Item
        className={classes.Description}
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
        <div className={classes.Head}>
          <span className={classes.HeadPrice}>{convertPrice(ticket.price)}</span>
          <img alt="carrier" src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} className={classes.HeadCarrier} />
        </div>
      }
    >
      {renderTicket(ticket.segments[0])}
      {renderTicket(ticket.segments[1])}
    </Card>
  )
}
export default TicketItem
