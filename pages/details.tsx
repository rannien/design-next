const hashtags: string[] = [
  'dance',
  'foodporn',
  'soulcandy',
  'food4u',
  'vegan'
]
const DetailsPage = () => (
  <>
    <div className="bg-white rounded-2xl p-8">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 p-8 pb-16 bg-gray-100 rounded-lg">
          <h2 className="text-xl mb-10">Links</h2>

          <label className="block mb-8 w-11/12">
            <span className="font-bold">Short Link</span>
            <input type="text" className="border-0 rounded-md p-3 mt-1 block w-full" placeholder="" defaultValue="https://bitly.is/2R9Ag8Y" />
          </label>

          <label className="block w-11/12">
            <span className="font-bold">HTML5 Video</span>
            <input type="text" className="border-0 rounded-md p-3 mt-1 block w-full" placeholder="" defaultValue="https://www.youtube.com/watch?v=xEuQiC9T5jc" />
          </label>
        </div>

        <div className="flex-1 p-8">
          <div className="mb-6 block text-blue-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="inline-block align-middle ml-2">Add to favourites</span>
          </div>

          <div className="mb-6 block text-blue-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span className="inline-block align-middle ml-2">Embed</span>
          </div>

          <h2 className="text-2xl mt-10 mb-4 block">Share it!</h2>

          <button className="w-32 text-left border-2 block mb-4 border-gray-100 hover:border-blue-700 focus:outline-none px-2 py-1 rounded-sm focus:ring-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 align-middle inline-block text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="ml-2 inline-block align-middle">Facebook</span>
          </button>

          <button className="w-32 text-left border-2 block border-gray-100 hover:border-blue-400 focus:outline-none px-2 py-1 rounded-sm focus:ring-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 align-middle inline-block text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="ml-2 inline-block align-middle">Twitter</span>
          </button>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-xl mb-4">Relevant tags</h2>
        <ul className="inline">
          {hashtags.map((hashtag) => (
            <li className="inline mr-2 cursor-pointer">#{hashtag}</li>
          ))}
        </ul>
      </div>
    </div>
  </>
)

export default DetailsPage
