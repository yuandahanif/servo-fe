import Head from 'next/head'
import Navbar from './navbar'

interface Props {
  children: React.ReactNode
}

function layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Servo</title>
        <meta name="description" content="Servo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="min-h-screen w-full flex flex-col">
        <main className="flex-grow w-full min-h-full p-2 sm:p-8 pt-20 sm:pt-28">
          {children}
        </main>
        <footer className="bg-blue-400 py-4 text-center text-white">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <span className="">AAA++</span>
          </a>
        </footer>
      </div>
    </>
  )
}

export default layout
