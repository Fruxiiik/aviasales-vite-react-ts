import { Ticket } from '@/types/ticketsTypes'
import { FiltersState } from '@/types/filtersTypes'

function filter(tickets: Ticket[], filters: FiltersState): Ticket[] {
  if (filters.all) {
    return tickets
  }
  function getStopsCount(key: string): number {
    switch (key) {
      case 'none':
        return 0
      case 'one':
        return 1
      case 'two':
        return 2
      case 'three':
        return 3
      default:
        return -1
    }
  }
  const maxStops = Object.entries(filters).reduce((max, [key, value]) => {
    if (key === 'all' || !value) return max
    const stops = getStopsCount(key)
    return Math.max(max, stops)
  }, 0)

  return tickets.filter((ticket) => ticket.segments.every((segment) => segment.stops.length <= maxStops))
}

export default filter
