import React from 'react'
import { Card } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { transferFilters, transferFilterChanged } from './FiltersSlice'
import classes from './TransferFilters.module.scss'

function FiltersTransfer({ value: transfers, onChange }) {
  const renderFilters = transferFilters.map((item) => {
    const checked = transfers.includes(item.name)
    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      onChange(item.name, changeType)
    }

    return (
      <li key={item.name} className={classes.list__item}>
        <div className={classes['form-check']}>
          <input
            onChange={handleChange}
            checked={checked}
            className={classes['check-input']}
            type="checkbox"
            id={item.name}
          />
          <label className={classes['check-label']} htmlFor={item.name}>
            {item.label}
          </label>
        </div>
      </li>
    )
  })

  return <ul className={classes.list}>{renderFilters}</ul>
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
