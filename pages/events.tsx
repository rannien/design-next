import { Event } from '../interfaces/event'
import Layout from '../components/Layout'

const events: Event[] = [
  { id: 1, date: new Date(2021, 4, 4, 17, 23, 42, 11), title: 'Designing Beautiful Interfaces' },
  { id: 2, date: new Date(2021, 5, 4, 17, 23, 42, 11), title: 'Designing for Accessibility' },
  { id: 3, date: new Date(2021, 6, 4, 17, 23, 42, 11), title: 'Designing for People' },
]

const EventsPage = () => (
  <Layout title="Events | Next.js + TypeScript Example">
    <div className="max-w-md bg-white mx-auto px-16 py-12 rounded-xl">
      <h2 className="font-bold text-xl mb-10">Event this week</h2>
      <ul className="mb-10">
        {events.map((event) => (
          <li className="font-medium" key={event.id}>
            <div>
              <strong className="text-gray-600">{event.title}</strong>
            </div>
            <div className="text-xs text-gray-500">
              {event.date.toDateString()}
            </div>
            <hr className="my-4" />
          </li>
        ))}
      </ul>
      <button className="p-4 block w-full rounded-md text-white font-bold bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
        View All Events
        </button>
    </div>
  </Layout>
)

export default EventsPage
