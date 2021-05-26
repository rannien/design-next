import { Subscription } from '../interfaces/subscription'

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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:gap-3 mb-8 justify-items-stretch">
        {subscriptions.map((subscription) => (
          <div className="p-4 bg-white rounded-xl shadow-md h-28 flex" key={subscription.id}>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" name="" value="1" className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md focus:ring-purple-600 checked:bg-purple-600 hover:text-purple-800 focus:text-purple-600 checked:border-transparent focus:outline-none" />
              <span className="text-gray-900 font-medium">
                <strong className="text-gray-600">{subscription.title}</strong><br />
                <span className="text-gray-500">{subscription.description}</span>
              </span>
            </label>
         </div>
        ))}
      </div>

      <div>
        <input className="rounded-sm border-purple-500 max-w-md w-2/4 p-4 border-collapse" type="email" name="email" placeholder="Enter your email address" />
        
        <button className="p-4 inline-block border-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          Sign Me Up!
        </button>
      </div>
    </div>
  </>
)

export default SubscribePage
