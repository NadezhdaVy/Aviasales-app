import React from 'react'
import { Card } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { transferFilters, transferFilterChanged } from './FiltersSlice'
import classes from './TransferFilters.module.scss'

function FiltersTransfer({ value: transfers, onChange }) {
  const renderFilters = transferFilters.map((item) => {
    const checked = transfers.includes(item.count)

    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      onChange(item.count, changeType)
    }

    return (
      <div key={item.name} className={classes['check-item']}>
        <input
          onChange={handleChange}
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

  return <form className={classes['check-form']}>{renderFilters}</form>
}

function TransferFilters() {
  const dispatch = useDispatch()

  const { transfers } = useSelector((state) => state.filters)

  const onFilterChange = (filterName, changeType) => {
    dispatch(transferFilterChanged(filterName, changeType))
  }

  return (
    <Card title="Количество пересадок" className={classes.TransferFilters}>
      <FiltersTransfer value={transfers} onChange={onFilterChange} />
    </Card>
  )
}

export default TransferFilters
