import { Collection } from '../interfaces/collection'

const collections: Collection[] = [
  { id: 1, icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', title: 'Search', description: 'Search in any topic you are interested and find any answers you need.' },
  { id: 2, icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', title: 'Browse', description: 'Search in any topic you are interested and find any answers you need.' },
  { id: 3, icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7', title: 'Maps', description: 'Search in any topic you are interested and find any answers you need.' },
]

const CollectionPage = () => (
  <>
    <div className="bg-white mx-auto px-16 py-12 rounded-md">
      <h2 className="font-bold text-xl mb-4 text-center">Collection</h2>

      <select className="w-1/3 py-3 rounded-md mx-auto block mb-16">
        <option value="">Search & Explore</option>
      </select>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:gap-3 mb-8 justify-items-stretch">
        {collections.map((collection) => (
          <div className="bg-gradient-to-br from-yellow-50 via-red-50 to-pink-50 p-10 rounded-md shadow-sm text-center" key={collection.id}>
            <div className="rounded-full h-16 w-16 mx-auto flex items-center justify-center bg-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={collection.icon} />
              </svg>
            </div>
            <strong className="text-gray-600">{collection.title}</strong><br />
            <span className="text-gray-500 text-sm">{collection.description}</span>

            <button className="py-2 px-4 block border-2 rounded-md mx-auto mt-8 text-white bg-black hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  </>
)

export default CollectionPage
