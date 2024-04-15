import { createRoot } from 'react-dom/client'
import React, { StrictMode } from 'react'

import { Sidebar, Filter, TicketList, Header } from '@/components'

import classes from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={classes.App}>
      <div className={classes.app_wrapper}>
        <Header />
        <div className={classes.main}>
          <Sidebar />
          <Filter />
          <TicketList />
        </div>
      </div>
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!) // используем Non-null assertion operator (!) для указания, что элемент существует
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
