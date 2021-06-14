import Layout from '../components/layout'
import dynamic from 'next/dynamic'
import { MouseEvent, useState } from 'react'
import DiagnosisCard from '../components/diagnosis-card'
import { useRouter } from 'next/router'

const QrReader = dynamic(() => import('react-qr-reader'), {
  ssr: false,
})

export default function Home() {
  const router = useRouter()
  const [displayScanner, setDisplayScanner] = useState(false)
  const [result, setResult] = useState('no data')

  const toggleScanner = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setDisplayScanner((s) => !s)
  }

  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data)
      router.push(`/symptom/${data}`)
    }
  }

  const handleError = (err: {}) => {
    console.error(err)
  }

  return (
    <Layout>
      <div className="py-2 flex flex-col items-center">
        <h1 className="prose prose-2xl font-bold">Scan QR Code mesin</h1>
        <div className="my-4 flex w-72 h-72 border border-indigo-200">
          {displayScanner ? (
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }}
            />
          ) : (
            <svg className="h-32 w-32 m-auto opacity-30" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z"
              />
            </svg>
          )}
        </div>

        <button
          onClick={toggleScanner}
          className="p-4 bg-blue-400 text-white rounded-md"
        >
          Scan QR Code Mesin
        </button>

        <div className="w-full mt-8 grid grid-flow-row grid-cols-1 justify-items-stretch gap-y-4">
          {[0, 1, 2, 3].map((v, i) => (
            <DiagnosisCard key={i} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
