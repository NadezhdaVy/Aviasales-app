import React from 'react'

import classes from './Loader.module.scss'

function Loader() {
  return (
    <div className={classes.Loader}>
      <h1 data-text="loading...">loading...</h1>
    </div>
  )
}

export default Loader
