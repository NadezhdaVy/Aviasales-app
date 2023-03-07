import React from 'react'
import { Radio } from 'antd'
import { useDispatch } from 'react-redux'

import { priceFilterChanged } from '../../redux/slices/FiltersSlice'

import classes from './PriceFilters.module.scss'

function PriceFilters() {
  const filters = [
    { name: 'cheap', label: 'самый дешевый' },
    { name: 'fast', label: 'самый быстрый' },
    { name: 'normal', label: 'оптимальный' },
  ]

  const dispatch = useDispatch()

  const onPriceChanged = (value) => dispatch(priceFilterChanged(value))

  const renderFilters = filters.map(({ name, label }) => {
    const value = name

    return (
      <Radio.Button
        key={name}
        onClick={() => onPriceChanged(value)}
        type="button"
        value={name}
        className={classes.button}
      >
        {label.toUpperCase()}
      </Radio.Button>
    )
  })

  return (
    <Radio.Group size="large" buttonStyle="solid" defaultValue="cheap" className={classes.PriceFilters}>
      {renderFilters}
    </Radio.Group>
  )
}

export default PriceFilters
