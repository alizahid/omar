import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <>
    <Head>
      <title>Omar Zahid / Aspiring accountant • Hobbyist developer</title>
    </Head>

    <main className="flex flex-col items-center justify-center w-screen h-screen cursor-default">
      <h1 className="text-4xl font-semibold text-teal-500 lg:text-6xl">
        Omar Zahid
      </h1>
      <p className="mt-2 lg:text-lg">
        Aspiring accountant • Hobbyist developer
      </p>

      <div className="flex flex-col items-center mt-8 lg:flex-row">
        <Link href="/resume.pdf">
          <a className="p-3 transition rounded-lg hover:bg-teal-100">Resume</a>
        </Link>
        <Link href="https://instagram.com/omarzah1d">
          <a className="p-3 transition rounded-lg hover:bg-teal-100">
            Instagram
          </a>
        </Link>
        <Link href="https://twitter.com/omarrzahid">
          <a className="p-3 transition rounded-lg hover:bg-teal-100">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/omar-zahid-931763177">
          <a className="p-3 transition rounded-lg hover:bg-teal-100">
            LinkedIn
          </a>
        </Link>
      </div>
    </main>
  </>
)

export default Home
