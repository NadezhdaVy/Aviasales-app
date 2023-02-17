import React from 'react'
import { List } from 'antd'
import { useSelector } from 'react-redux'

import TicketItem from '../TicketItem'
import Loader from '../Loader'

import { selectFilteredTicketsIds } from './TicketsListSlice'
import classes from './TicketsList.module.scss'

export default function TiketsList() {
  const ticketIds = useSelector(selectFilteredTicketsIds)
  const ticketsState = useSelector((state) => state.tickets)
  const { shownTickets, stop } = ticketsState

  const toShow = ticketIds.slice(0, shownTickets)
  const loader = stop === true ? null : <Loader />

  return (
    <>
      {loader}

      <List
        locale={{ emptyText: 'Рейсов, подходящих под заданные фильтры, не найдено' }}
        className={classes.TicketsList}
        dataSource={toShow}
        renderItem={(id) => (
          <List.Item key={id} className={classes['list-item']}>
            <TicketItem id={id} />
          </List.Item>
        )}
      />
    </>
  )
}
