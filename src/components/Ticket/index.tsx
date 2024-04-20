import React from 'react'

import { Ticket as TicketType } from '@/types/ticketsTypes'
import { formatTime, formatDuration, calculateEndTime } from '@/helperFunctions/time'
import { formatStops } from '@/helperFunctions/stops'

import classes from './Ticket.module.scss'

interface TicketProps {
  data: TicketType
}

export const Ticket: React.FC<TicketProps> = ({ data }) => {
  const { price, segments } = data
  return (
    <div className={classes.ticket}>
      <header className={classes.ticket__header}>
        <div className={classes.ticket__price}>{`${price}р`}</div>
        <div className={classes.ticket__logo}>
          <img className={classes.ticket__logo} src={`https://pics.avs.io/99/36/${data.carrier}.svg`} alt="logo" />
        </div>
      </header>

      <div className={classes.ticket__data}>
        {segments.map((segment) => (
          <div key={`${segment.origin}-${segment.destination}-${segment.date}`} className={classes.ticket__part}>
            <div className={`${classes.title__grey} ${classes.part__route}`}>
              {segment.origin} - {segment.destination}
              <div
                className={classes.title}
              >{`${formatTime(new Date(segment.date))} - ${formatTime(calculateEndTime(segment.date, segment.duration))}`}</div>
            </div>
            <div className={`${classes.title__grey} ${classes.part__duration}`}>
              В пути
              <div className={classes.title}>{formatDuration(segment.duration)}</div>
            </div>
            <div className={`${classes.title__grey} ${classes.part__transfers}`}>
              {formatStops(segment.stops)}
              <div className={classes.title}>{segment.stops.join(', ')}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
