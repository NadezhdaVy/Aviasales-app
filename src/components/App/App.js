import React from 'react'
import { Col, Row } from 'antd'

import TransferFilters from '../Filters/TransferFilters'
import MainContent from '../MainContent'

import classes from './App.module.scss'

export default function App() {
  return (
    <div className={classes.App}>
      <div className={classes.logo} />
      <Row justify="center" align="top" gutter="0" className={classes.row}>
        <Col className={classes['order-col-first']} xxl={6} xl={6} lg={7} md={8} sm={24} xs={24}>
          <TransferFilters />
        </Col>

        <Col className={classes['order-col-last']} xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
          <MainContent />
        </Col>
      </Row>
    </div>
  )
}
