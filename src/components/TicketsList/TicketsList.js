import React from 'react'
import { List } from 'antd'
import { useSelector } from 'react-redux'

import TicketItem from '../TicketItem'

import classes from './TicketsList.module.scss'

export default function TiketsList() {
  const ticketsState = useSelector((state) => state.tickets)
  const { tickets, status, shownTickets } = ticketsState
  const toShow = tickets.slice(0, shownTickets)

  if (status === 'loading') {
    return <div>loading...</div>
  }
  return (
    <List
      className={classes.TicketsList}
      dataSource={toShow}
      renderItem={(ticket) => (
        <List.Item className={classes['list-item']}>
          <TicketItem price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />
        </List.Item>
      )}
    />
  )
}
