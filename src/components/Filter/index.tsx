import React from 'react'

import classes from './Filter.module.scss'

export const Filter: React.FC = () => {
  return (
    <div className={classes.filter}>
      <div className={`${classes.filter__element} ${classes['filter__low-price']}`}>Самый дешёвый</div>
      <div className={`${classes.filter__element} ${classes.filter__faster}`}>Самый быстрый</div>
    </div>
  )
}
