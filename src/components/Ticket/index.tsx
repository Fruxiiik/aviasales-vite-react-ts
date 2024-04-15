import React from 'react'

import { ticketLogo } from '@/images'

import classes from './Ticket.module.scss'

export const Ticket: React.FC = () => {
  return (
    <div className={classes.ticket}>
      <header className={classes.ticket__header}>
        <div className={classes.ticket__price}>13 400р</div>
        <div className={classes.ticket__logo}>
          <img src={ticketLogo} alt="logo" />
        </div>
      </header>

      <div className={classes.ticket__data}>
        <div className={classes.ticket__part}>
          <div className={`${classes.title__grey} ${classes.part__route}`}>
            MOW - HKT
            <div className={classes.title}>10:45 - 08:00</div>
          </div>
          <div className={`${classes.title__grey} ${classes.part__duration}`}>
            В пути
            <div className={classes.title}>21ч 15м</div>
          </div>
          <div className={`${classes.title__grey} ${classes.part__transfers}`}>
            2 пересадки
            <div className={classes.title}>НКГ, JNB</div>
          </div>
        </div>
        <div className={classes.ticket__part}>
          <div className={`${classes.title__grey} ${classes.part__route}`}>
            MOW - HKT
            <div className={classes.title}>10:45 - 08:00</div>
          </div>
          <div className={`${classes.title__grey} ${classes.part__duration}`}>
            В пути
            <div className={classes.title}>21ч 15м</div>
          </div>
          <div className={`${classes.title__grey} ${classes.part__transfers}`}>
            2 пересадки
            <div className={classes.title}>НКГ, JNB</div>
          </div>
        </div>
      </div>
    </div>
  )
}
