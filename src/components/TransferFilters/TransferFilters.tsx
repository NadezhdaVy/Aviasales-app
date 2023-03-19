import React from 'react'
import { Card } from 'antd'

import { useAppDispatch, useAppSelector } from '../../redux/store'
import { transferFilters, transferFilterChanged } from '../../redux/slices/FiltersSlice'

import classes from './TransferFilters.module.scss'

function TransferFilters() {
  const dispatch = useAppDispatch()

  const { transfers } = useAppSelector((state) => state.filters)

  const onFilterChange = (filterName: number, changeType: 'removed' | 'added') => {
    dispatch(transferFilterChanged(filterName, changeType))
  }

  const renderFilters = transferFilters.map((item) => {
    const checked = transfers.includes(item.count)

    const changeType = checked ? 'removed' : 'added'

    return (
      <div key={item.name} className={classes.CheckItem}>
        <input
          onChange={() => onFilterChange(item.count, changeType)}
          checked={checked}
          className={classes.CheckInput}
          type="checkbox"
          id={String(item.count)}
        />
        <label className={classes.CheckLabel} htmlFor={String(item.count)}>
          {item.label}
        </label>
      </div>
    )
  })

  return (
    <Card title="Количество пересадок" className={classes.TransferFilters}>
      <form className={classes.CheckForm}>{renderFilters}</form>
    </Card>
  )
}

export default TransferFilters
