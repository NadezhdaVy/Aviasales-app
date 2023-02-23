import React from 'react'
import { Alert } from 'antd'

import classes from './ErrorIndicator.module.scss'

function ErrorIndicator() {
  return <Alert className={classes.error} message="Something went wrong" type="error" showIcon />
}

export default ErrorIndicator
