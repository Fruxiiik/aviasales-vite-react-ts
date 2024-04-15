import React from 'react'

import { logo } from '@/images'

import classes from './Header.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
    </header>
  )
}
