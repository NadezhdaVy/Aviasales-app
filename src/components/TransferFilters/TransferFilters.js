import React from 'react'
import { Card } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { transferFilters, transferFilterChanged } from '../../redux/slices/FiltersSlice'

import classes from './TransferFilters.module.scss'

function TransferFilters() {
  const dispatch = useDispatch()

  const { transfers } = useSelector((state) => state.filters)

  const onFilterChange = (filterName, changeType) => {
    dispatch(transferFilterChanged(filterName, changeType))
  }

  const renderFilters = transferFilters.map((item) => {
    const checked = transfers.includes(item.count)

    const changeType = checked ? 'removed' : 'added'

    return (
      <div key={item.name} className={classes['check-item']}>
        <input
          onChange={() => onFilterChange(item.count, changeType)}
          checked={checked}
          className={classes['check-input']}
          type="checkbox"
          id={item.count}
        />
        <label className={classes['check-label']} htmlFor={item.count}>
          {item.label}
        </label>
      </div>
    )
  })

  return (
    <Card title="Количество пересадок" className={classes.TransferFilters}>
      <form className={classes['check-form']}>{renderFilters}</form>
    </Card>
  )
}

export default TransferFilters
