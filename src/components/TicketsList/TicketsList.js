import { List } from 'antd'
import { useSelector } from 'react-redux'
import React, { useState, useMemo } from 'react'

import selectFilteredTickets from '../../utils/filters'
import LoadMore from '../LoadMore'
import ErrorIndicator from '../ErrorIndicator'
import TicketItem from '../TicketItem'
import Loader from '../Loader'

import classes from './TicketsList.module.scss'

export default function TiketsList() {
  const [shownTickets, setShownTickets] = useState(5)

  const showMoreTickets = () => {
    setShownTickets((count) => count + 5)
  }

  const filtersState = useSelector((state) => state.filters)
  const { stop, error, status, tickets } = useSelector((state) => state.tickets)

  const selectTicketsByFilter = useMemo(() => selectFilteredTickets(tickets, filtersState), [tickets, filtersState])
  const toShow = selectTicketsByFilter.slice(0, shownTickets)

  const loader = stop || (toShow.length === 0 && status !== 'loading') ? null : <Loader />
  const content = (
    <Content
      toShow={toShow}
      status={status}
      showMoreTickets={showMoreTickets}
      ticketsAmount={selectTicketsByFilter.length}
      shownTickets={shownTickets}
    />
  )
  const errMsg = error !== null && toShow.length === 0 ? <ErrorIndicator /> : null

  return (
    <>
      {loader}
      {errMsg}
      {content}
    </>
  )
}

function Content({ toShow, status, showMoreTickets, ticketsAmount, shownTickets }) {
  const { tickets } = useSelector((state) => state.tickets)
  return (
    <List
      loadMore={
        <LoadMore showMoreTickets={showMoreTickets} ticketsAmount={ticketsAmount} shownTickets={shownTickets} />
      }
      loading={status === 'loading'}
      locale={{ emptyText: 'Рейсов, подходящих под заданные фильтры, не найдено' }}
      className={classes.TicketsList}
      dataSource={toShow}
      renderItem={(id) => (
        <List.Item
          key={
            tickets[id].price +
            tickets[id].carrier +
            tickets[id].segments[0].duration +
            tickets[id].segments[1].duration
          }
          className={classes['list-item']}
        >
          <TicketItem id={id} />
        </List.Item>
      )}
    />
  )
}
