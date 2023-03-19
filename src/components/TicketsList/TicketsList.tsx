import { List } from 'antd'
import React, { useMemo, useState } from 'react'

import { TicketInterface } from '../../ts/interfaces'
import { useAppSelector } from '../../redux/store'
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

  const filtersState = useAppSelector((state) => state.filters)
  const { stop, error, status, tickets } = useAppSelector((state) => state.tickets)

  const selectTicketsByFilter = useMemo(() => selectFilteredTickets(tickets, filtersState), [tickets, filtersState])

  const toShow = selectTicketsByFilter.slice(0, shownTickets)

  const loader = stop || (toShow.length === 0 && status !== 'loading') ? null : <Loader />

  const errMsg = error !== null && toShow.length === 0 ? <ErrorIndicator /> : null

  return (
    <>
      {loader}
      {errMsg}
      <List
        loadMore={
          <LoadMore
            showMoreTickets={showMoreTickets}
            ticketsAmount={selectTicketsByFilter.length}
            shownTickets={shownTickets}
          />
        }
        loading={status === 'loading'}
        locale={{ emptyText: 'Рейсов, подходящих под заданные фильтры, не найдено' }}
        className={classes.TicketsList}
        dataSource={toShow}
        renderItem={(ticket: TicketInterface) => (
          <List.Item
            key={ticket.price + ticket.carrier + ticket.segments[0].duration + ticket.segments[1].duration}
            className={classes.ListItem}
          >
            <TicketItem ticket={ticket} />
          </List.Item>
        )}
      />
    </>
  )
}
