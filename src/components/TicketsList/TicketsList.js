import { List } from 'antd'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'

import LoadMore from '../LoadMore'
import ErrorIndicator from '../ErrorIndicator'
import TicketItem from '../TicketItem'
import Loader from '../Loader'
import { selectFilteredIds } from '../../redux/selectors/selectors'

import classes from './TicketsList.module.scss'

export default function TiketsList() {
  const [shownTickets, setShownTickets] = useState(5)

  const showMoreTickets = () => {
    setShownTickets((count) => count + 5)
  }

  const ticketsState = useSelector((state) => state.tickets)
  const { stop, error, status } = ticketsState
  const ticketIds = useSelector(selectFilteredIds)
  const toShow = ticketIds.slice(0, shownTickets)
  const loader = stop || (toShow.length === 0 && status !== 'loading') ? null : <Loader />
  const content = (
    <Content
      toShow={toShow}
      status={status}
      showMoreTickets={showMoreTickets}
      ticketsAmount={ticketIds.length}
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
        <List.Item key={id} className={classes['list-item']}>
          <TicketItem id={id} />
        </List.Item>
      )}
    />
  )
}
