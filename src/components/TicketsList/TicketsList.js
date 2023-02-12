import React from 'react'
import { List } from 'antd'

import TicketItem from '../TicketItem'

import classes from './TicketsList.module.scss'

export default class TiketsList extends React.Component {
  tikets = [
    {
      tiket: {
        id: 'tk1',
        price: 13400,
        carrier: 'AirLines',
        segments: [
          {
            // Код города (iata)
            origin: 'MOW',
            // Код города (iata)
            destination: 'HKT',
            // Дата и время вылета туда
            date: '10:45 - 8:00',
            // Массив кодов (iata) городов с пересадками
            stops: ['HKG', 'JNB'],
            // Общее время перелёта в минутах
            duration: '21ч 15м',
          },
          {
            // Код города (iata)
            origin: 'MOW',
            // Код города (iata)
            destination: 'HKT',
            // Дата и время вылета обратно
            date: '11:20 - 00:50',
            // Массив кодов (iata) городов с пересадками
            stops: ['HKG'],
            // Общее время перелёта в минутах
            duration: '13ч 30м',
          },
        ],
      },
    },
    {
      tiket: {
        id: 'tk2',
        price: 13400,
        carrier: 'AirLines',
        segments: [
          {
            // Код города (iata)
            origin: 'MOW',
            // Код города (iata)
            destination: 'HKT',
            // Дата и время вылета туда
            date: '10:45 - 8:00',
            // Массив кодов (iata) городов с пересадками
            stops: ['HKG', 'JNB'],
            // Общее время перелёта в минутах
            duration: '21ч 15м',
          },
          {
            // Код города (iata)
            origin: 'MOW',
            // Код города (iata)
            destination: 'HKT',
            // Дата и время вылета обратно
            date: '11:20 - 00:50',
            // Массив кодов (iata) городов с пересадками
            stops: ['HKG'],
            // Общее время перелёта в минутах
            duration: '13ч 30м',
          },
        ],
      },
    },
    {
      tiket: {
        id: 'tk3',
        price: 13400,
        carrier: 'AirLines',
        segments: [
          {
            // Код города (iata)
            origin: 'MOW',
            // Код города (iata)
            destination: 'HKT',
            // Дата и время вылета туда
            date: '10:45 - 8:00',
            // Массив кодов (iata) городов с пересадками
            stops: ['HKG', 'JNB'],
            // Общее время перелёта в минутах
            duration: '21ч 15м',
          },
          {
            // Код города (iata)
            origin: 'MOW',
            // Код города (iata)
            destination: 'HKT',
            // Дата и время вылета обратно
            date: '11:20 - 00:50',
            // Массив кодов (iata) городов с пересадками
            stops: ['HKG'],
            // Общее время перелёта в минутах
            duration: '13ч 30м',
          },
        ],
      },
    },
    {
      tiket: {
        id: 'tk4',
        price: 13400,
        carrier: 'AirLines',
        segments: [
          {
            // Код города (iata)
            origin: 'MOW',
            // Код города (iata)
            destination: 'HKT',
            // Дата и время вылета туда
            date: '10:45 - 8:00',
            // Массив кодов (iata) городов с пересадками
            stops: ['HKG', 'JNB'],
            // Общее время перелёта в минутах
            duration: '21ч 15м',
          },
          {
            // Код города (iata)
            origin: 'MOW',
            // Код города (iata)
            destination: 'HKT',
            // Дата и время вылета обратно
            date: '11:20 - 00:50',
            // Массив кодов (iata) городов с пересадками
            stops: ['HKG'],
            // Общее время перелёта в минутах
            duration: '13ч 30м',
          },
        ],
      },
    },
    {
      tiket: {
        id: 'tk5',
        price: 13400,
        carrier: 'AirLines',
        segments: [
          {
            // Код города (iata)
            origin: 'MOW',
            // Код города (iata)
            destination: 'HKT',
            // Дата и время вылета туда
            date: '10:45 - 8:00',
            // Массив кодов (iata) городов с пересадками
            stops: ['HKG', 'JNB'],
            // Общее время перелёта в минутах
            duration: '21ч 15м',
          },
          {
            // Код города (iata)
            origin: 'MOW',
            // Код города (iata)
            destination: 'HKT',
            // Дата и время вылета обратно
            date: '11:20 - 00:50',
            // Массив кодов (iata) городов с пересадками
            stops: ['HKG'],
            // Общее время перелёта в минутах
            duration: '13ч 30м',
          },
        ],
      },
    },
  ]

  render() {
    return (
      <List
        className={classes.TicketsList}
        dataSource={this.tikets}
        renderItem={({ tiket: { id, price, carrier, segments } }) => (
          <List.Item className={classes['list-item']} key={id}>
            <TicketItem price={price} carrier={carrier} segments={segments} />
          </List.Item>
        )}
      />
    )
  }
}
