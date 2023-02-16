import React from 'react'
import { List } from 'antd'
import { useSelector } from 'react-redux'

import TicketItem from '../TicketItem'
import Loader from '../Loader'

import classes from './TicketsList.module.scss'

export default function TiketsList() {
  const ticketsState = useSelector((state) => state.tickets)
  const { tickets, shownTickets, status, stop } = ticketsState

  const toShow = Object.values(tickets).slice(0, shownTickets)
  const loader = stop === true ? null : <Loader />
  // eslint-disable-next-line prettier/prettier

  return (
    <>
      {loader}
      <List
        className={classes.TicketsList}
        dataSource={toShow}
        renderItem={(ticket) => (
          <List.Item className={classes['list-item']}>
            <TicketItem status={status} price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />
          </List.Item>
        )}
      />
    </>
  )
}
