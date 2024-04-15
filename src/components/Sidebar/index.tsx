import React from 'react'

import classes from './Sidebar.module.scss'

export const Sidebar: React.FC = () => {
  return (
    <div className={classes.sidebar}>
      <h3>Количество пересадок</h3>
      <form>
        <label htmlFor="1">
          <input
            // className={`${classes.sidebar__input} ${classes.sidebarInputVisuallyHidden}`}
            className={`${classes.input} ${classes['input--visually-hidden']}`}
            type="checkbox"
            id="1"
            // checked={isChecked}
            // onChange={toggleCheck}
          />
          <span className={`${classes.checker}`} />
          Все
        </label>
        <label htmlFor="2">
          <input
            // className={`${classes.sidebar__input} ${classes.sidebarInputVisuallyHidden}`}
            className={`${classes.input} ${classes['input--visually-hidden']}`}
            type="checkbox"
            id="2"
            // checked={isChecked}
            // onChange={toggleCheck}
          />
          <span className={`${classes.checker}`} />
          Все
        </label>
        <label htmlFor="3">
          <input
            // className={`${classes.sidebar__input} ${classes.sidebarInputVisuallyHidden}`}
            className={`${classes.input} ${classes['input--visually-hidden']}`}
            type="checkbox"
            id="3"
            // checked={isChecked}
            // onChange={toggleCheck}
          />
          <span className={`${classes.checker}`} />
          Все
        </label>
        <label htmlFor="4">
          <input
            // className={`${classes.sidebar__input} ${classes.sidebarInputVisuallyHidden}`}
            className={`${classes.input} ${classes['input--visually-hidden']}`}
            type="checkbox"
            id="4"
            // checked={isChecked}
            // onChange={toggleCheck}
          />
          <span className={`${classes.checker}`} />
          Все
        </label>
        <label htmlFor="5">
          <input
            // className={`${classes.sidebar__input} ${classes.sidebarInputVisuallyHidden}`}
            className={`${classes.input} ${classes['input--visually-hidden']}`}
            type="checkbox"
            id="5"
            // checked={isChecked}
            // onChange={toggleCheck}
          />
          <span className={`${classes.checker}`} />
          Все
        </label>
      </form>
    </div>
  )
}
