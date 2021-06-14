import Layout from '../components/layout'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const QrReader = dynamic(() => import('react-qr-reader'), {
  ssr: false,
})

export default function Home() {
  const [result, setResult] = useState('no data')

  const [displayScanner, setDisplayScanner] = useState(false)

  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data)
    }
  }

  const handleError = (err: {}) => {
    console.error(err)
  }

  return (
    <Layout>
      <h1 className="">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      {displayScanner && (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style='w-40'
        />
      )}
      <p>{result}</p>
    </Layout>
  )
}
