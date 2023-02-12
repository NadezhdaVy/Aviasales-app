import React from 'react'
import { Card } from 'antd'

import classes from './TransferFilters.module.scss'

export default class TransferFilters extends React.Component {
  filters = [
    { name: 'all', label: 'Все' },
    { name: 'no-transfers', label: 'Без пересадок' },
    { name: '1transfer', label: '1 пересадка' },
    { name: '2transfer', label: '2 пеpесадки' },
    { name: '3transfer', label: '3 пеpесадки' },
  ]

  render() {
    const renderFilter = this.filters.map(({ name, label }) => (
      <li key={name} className={classes.list__item}>
        <div className={classes['form-check']}>
          <input className={classes['check-input']} type="checkbox" id={name} />
          <label className={classes['check-label']} htmlFor={name}>
            {label}
          </label>
        </div>
      </li>
    ))
    return (
      <Card title="Количество пересадок" className={classes.TransferFilters}>
        <ul className={classes.list}>{renderFilter}</ul>
      </Card>
    )
  }
}
