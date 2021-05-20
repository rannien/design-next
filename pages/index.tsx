import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">

    <div className="sm:text-center lg:text-left">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-gray-500">Welcome to my </span>
        <span className="block xl:inline">Next.JS & </span>
        <span className="block text-indigo-600 xl:inline">Tailwind CSS</span>
        <span className="block text-gray-500">playground</span>
      </h1>
    </div>
  </Layout>
)

export default IndexPage
