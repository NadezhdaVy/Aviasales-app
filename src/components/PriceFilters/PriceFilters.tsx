import * as React from 'react'
import { Radio } from 'antd'

import { useAppDispatch } from '../../redux/store'
import { priceFilterChanged } from '../../redux/slices/FiltersSlice'

import classes from './PriceFilters.module.scss'

function PriceFilters() {
  interface PriceFiltersInterface {
    name: 'cheap' | 'fast' | 'normal'
    label: 'самый дешевый' | 'самый быстрый' | 'оптимальный'
  }

  const filters: Array<PriceFiltersInterface> = [
    { name: 'cheap', label: 'самый дешевый' },
    { name: 'fast', label: 'самый быстрый' },
    { name: 'normal', label: 'оптимальный' },
  ]

  const dispatch = useAppDispatch()

  const onPriceChanged = (value: string) => dispatch(priceFilterChanged(value))

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
