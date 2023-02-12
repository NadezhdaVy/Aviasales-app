import React from 'react'
import { Radio } from 'antd'

import classes from './PriceFilters.module.scss'

export default class PriceFilters extends React.Component {
  filters = [
    { name: 'cheap', label: 'самый дешевый' },
    { name: 'fast', label: 'самый быстрый' },
    { name: 'normal', label: 'оптимальный' },
  ]

  render() {
    const buttons = this.filters.map(({ name, label }) => (
      <Radio.Button key={name} type="button" value={name} className={classes.button}>
        {label.toUpperCase()}
      </Radio.Button>
    ))
    return (
      <Radio.Group size="large" buttonStyle="solid" defaultValue="cheap" className={classes.PriceFilters}>
        {buttons}
      </Radio.Group>
    )
  }
}
