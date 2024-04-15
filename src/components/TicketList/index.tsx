import React from 'react'

import { Ticket } from '@/components/Ticket'

import classes from './TicketList.module.scss'

export const TicketList: React.FC = () => {
  return (
    <div className={classes.tickets}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button className={`${classes.tickets__button} ${classes.button}`} type="button">
        Показать еще 5 билетов!
      </button>
    </div>
  )
}
