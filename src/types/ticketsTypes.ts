export interface TicketState {
  tickets: string[]
  loading: boolean
  error: null | string
}

export enum TicketActionTypes {
  FETCH_TICKETS = 'FETCH_TICKETS',
  FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
  FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
}

interface FetchTicketAction {
  type: TicketActionTypes.FETCH_TICKETS
}
interface FetchTicketSuccessAction {
  type: TicketActionTypes.FETCH_TICKETS_SUCCESS
  payload: string[]
}
interface FetchTicketErrorAction {
  type: TicketActionTypes.FETCH_TICKETS_ERROR
  payload: string
}

// interface TicketAction {
//   type: string;
//   payload?: any;
// }

export type TicketAction = FetchTicketAction | FetchTicketErrorAction | FetchTicketSuccessAction
