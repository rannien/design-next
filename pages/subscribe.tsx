import { Subscription } from "../interfaces/subscription"

const subscriptions: Subscription[] = [
  { id: 1, title: 'Daily News', description: 'Biggest news for today.' },
  { id: 2, title: 'Week in Review', description: 'Weekly wrap up for you.' },
  { id: 3, title: 'System Administration', description: 'Every DevOps related news.' },
  { id: 4, title: 'Developer Updates', description: 'Latest technology updates.' },
  { id: 5, title: 'Funday Sunday', description: 'Just for fun to prepare for monday.' },
  { id: 6, title: 'TGIF', description: 'The one thing you need for weekends.' },
]

const SubscribePage = () => (
  <>
    <div className="bg-white mx-auto px-16 py-12 rounded-md">
      <h2 className="font-bold text-xl mb-10">Sign Up for Newsletters</h2>
      <div className="grid grid-cols-3 gap-4">
        {subscriptions.map((subscription) => (
          <div className="flex" key={subscription.id}>
            <div className="">
              <input type="checkbox" name="newsletter[]" />
            </div>
            <div className="">
              <strong className="text-gray-600">{subscription.title}</strong><br />
              <span>{subscription.description}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <input className="rounded-sm border-2 max-w-md w-2/4 p-4 border-collapse" type="email" name="email" placeholder="Enter your email address" />
        
        <button className="p-4 inline-block border-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          Sign Me Up!
        </button>
      </div>
    </div>
  </>
)

export default SubscribePage
