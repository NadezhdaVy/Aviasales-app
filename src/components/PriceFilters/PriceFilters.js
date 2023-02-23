import React from 'react'
import { Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { priceFilterChanged } from '../../redux/slices/FiltersSlice'

import classes from './PriceFilters.module.scss'

const filters = [
  { name: 'cheap', label: 'самый дешевый' },
  { name: 'fast', label: 'самый быстрый' },
  { name: 'normal', label: 'оптимальный' },
]

function Filters({ onChange }) {
  const renderFilters = filters.map(({ name, label }) => {
    const value = name
    const handleClick = () => onChange(value)

    return (
      <Radio.Button key={name} onClick={handleClick} type="button" value={name} className={classes.button}>
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

function PriceFilters() {
  const dispatch = useDispatch()

  const { price } = useSelector((state) => state.filters)

  const onPriceChanged = (value) => dispatch(priceFilterChanged(value))

  return <Filters value={price} onChange={onPriceChanged} />
}

export default PriceFilters
