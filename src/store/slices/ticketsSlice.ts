import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { message } from 'antd'

import { TicketsState } from '@/types/ticketsTypes'

const initialState: TicketsState = {
  tickets: [],
  loading: false,
  error: null,
  token: null,
  stop: false,
}

export const fetchSearchId = createAsyncThunk<string>('tickets/fetchSearchId', async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search')
  const data = await response.json()
  return data
})

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (token: string) => {
  const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${token}`)
  const data = await response.json()
  return data
})

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    getAppToken(state, action) {
      state.token = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.error = null
      })
      .addCase(fetchSearchId.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload.searchId // Сохраняем searchId в состояние
      })
      .addCase(fetchTickets.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.tickets = [
          ...JSON.parse(JSON.stringify(state.tickets)),
          ...JSON.parse(JSON.stringify(action.payload.tickets)),
        ]
        state.loading = false
        state.stop = action.payload.stop
        if (action.payload.stop) {
          message.open({
            type: 'success',
            content: `Offers(${state.tickets.length}) upload has been seccessufully completed!`,
            duration: 3,
          })
        }
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.loading = false
        message.open({
          type: 'error',
          content:
            'One of request was denied by the server with code 500. Fetch error by server. No worry, the download continues!',
          duration: 3,
        })
      })
  },
})

export const { getAppToken } = ticketsSlice.actions

export default ticketsSlice.reducer
