const hashtags: string[] = [
  'dance',
  'foodporn',
  'soulcandy',
  'food4u',
  'vegan'
]
const DetailsPage = () => (
  <>
    <div className="flex">
      <div className="flex-auto p-4">
        <h2 className="text-xl mb-10">Details</h2>

        <label className="block">
          <span className="text-gray-700">Short Link</span>
          <input type="text" className="mt-1 block w-full" placeholder="" />
        </label>
        
        <label className="block">
          <span className="text-gray-700">HTML5 Video</span>
          <input type="text" className="mt-1 block w-full" placeholder="" />
        </label>
      </div>

      <div className="flex-auto p-4">
        <div>
          Add to favourites
        </div>

        <div>
          Embed
        </div>

        <h2 className="text-xl">Share it!</h2>

        <button className="border-2 block border-gray-400 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-gray-600 p-1 rounded-md focus:ring-opacity-50">
          Facebook
        </button>

        <button className="border-2 block border-gray-400 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-gray-600 p-1 rounded-md focus:ring-opacity-50">
          Twitter
        </button>
      </div>
    </div>
    <div className="p-4">
      <h2 className="text-xl mb-4">Relevant tags</h2>
      <ul className="inline">
      {hashtags.map((hashtag) => (
        <li className="inline mr-2">#{hashtag}</li>
      ))}
      </ul>
    </div>
  </>
)

export default DetailsPage
