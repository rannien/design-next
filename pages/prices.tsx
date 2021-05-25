import { Price } from '../interfaces/price'

const prices: Price[] = [
  {
    label: 'free',
    title: 'Great for starters',
    description: 'Discover your inner designer.',
    price: 0,
    perks: ['3 new projects / month'],
    background: 'bg-gradient-to-r from-gray-200 to-gray-100',
    selected: false
  },
  {
    label: 'hobbyist',
    title: 'For everyday opportunists',
    description: 'Perfect for doing design on daily basis.',
    price: 5,
    perks: [
      '3 new projects / month',
      'Basic interaction'
    ],
    background: 'bg-gradient-to-r from-blue-200 via-purple-300 to-purple-400',
    selected: false
  },
  {
    label: 'premium',
    title: 'For professional use',
    description: 'Enjoy the limitless possibilites and assets.',
    price: 9,
    perks: [
      '3 new projects / month',
      'Basic interaction',
      'Asset library'
    ],
    background: 'bg-gradient-to-r from-pink-300 via-red-200 to-yellow-300',
    selected: true
  },
]

const PricesPage = () => (
  <>
    <h2 className="font-bold text-xl mb-10">Prices</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
      {prices.map((price) => (
        <div key={price.label} className="bg-white p-3 rounded-md shadow-lg">
            <div className={`mb-14 uppercase block p-4 rounded-md ${price.background}`}>{price.label}</div>
            
            <div className="mb-3">
              <strong className="text-5xl relative">
                <sup className="text-sm absolute top-2 -left-2">$</sup>
                {price.price}
              </strong>
              {price.price > 0 && <span> / mo</span>}
            </div>
            
            <div className="uppercase mb-7">{price.title}</div>
            
            <div className="">{price.description}</div>

            <button className={`${price.selected ? 'bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white' : 'border-2 border-gray-400 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-gray-600'} mt-14 mb-8 p-4 block w-11/12 mx-auto rounded-md font-bold  focus:ring-opacity-50`}>
              GET STARTED
            </button>

            <ul className="text-left ml-3">
            {price.perks.map((perk) => (
              <li className="my-4">

                {price.perks.length >= 2 
                  ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 inline-block align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )
                  : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 inline-block align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                }
                <span className="ml-2 inline-block align-top">{perk}</span>
              </li>
            ))}
            </ul>
        </div>
      ))}
    </div>
  </>
)

export default PricesPage
