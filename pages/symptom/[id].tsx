import Layout from '../../components/layout'
import dynamic from 'next/dynamic'
import { MouseEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const [result, setResult] = useState('no data')

  return (
    <Layout>
      <div className="bg-yellow-200 py-2 flex flex-col items-center">
        <h1 className="prose prose-2xl font-bold">Scan QR Code mesin</h1>
        <div className="my-4 w-72 h-72 border-indigo-200">{id}</div>

        <button onClick={() => {}} className="p-4 bg-blue-400">
          Scan QR Code Mesin
        </button>

        {/* <p>{result}</p> */}

        <div className="w-full grid grid-flow-row grid-cols-1 justify-items-stretch gap-y-4 bg-green-300">
          {/* {[0, 1, 2, 3].map((v, i) => (
            <DiagnosisCard key={i} />
          ))} */}
        </div>
      </div>
    </Layout>
  )
}
