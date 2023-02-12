import React from 'react'
import { Card, Descriptions } from 'antd'

import classes from './TicketItem.module.scss'

export default class TicketItem extends React.Component {
  renderTicket = (tiket) => (
    <Descriptions className={classes.descriptions} layout="vertical" size="small">
      <Descriptions.Item className={classes.description} label={`${tiket.origin}-${tiket.destination}`}>
        {tiket.date}
      </Descriptions.Item>
      <Descriptions.Item className={classes.description} label="В ПУТИ">
        {tiket.duration}
      </Descriptions.Item>
      <Descriptions.Item className={classes.description} label="Пересадки">
        {tiket.stops[0]}
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
            <span className={classes['head-price']}>{price}</span>
            <span className={classes['head-carrier']}> {carrier}</span>
          </div>
        }
      >
        {this.renderTicket(segments[0])}
        {this.renderTicket(segments[1])}
      </Card>
    )
  }
}
