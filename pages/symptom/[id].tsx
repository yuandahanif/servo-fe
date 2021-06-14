import Layout from '../../components/layout'
import Head from 'next/head'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

const sympthoms = [
  'batuk',
  'pusing',
  'demam',
  'sesak nafas',
  'ngantuk',
  'mager',
  'mager banget',
  'batuk lebay',
  'batu jaim',
  'batuk berdahak',
  'sedih',
  'gabut',
  'kurang kerjaan',
]

export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const [symptomCount, setSymptomCount] = useState(0)
  const [sympthomChecked, setSympthomChecked] = useState(
    new Array(sympthoms.length).fill(false),
  )

  const handleSelectSymthom = (i: number) => {
    setSympthomChecked((s) => {
      let arr = [...s]
      arr[i] = !arr[i]
      return arr
    })

    setSymptomCount((c) => {
      let count = sympthomChecked[i] ? --c : ++c
      return count >= 0 ? count : 0
    })
  }

  const redirectToConfirmPage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const selectedSymthoms: number[] | null = []
    sympthomChecked.filter((s, i) => {
      if (s) {
        console.log('file: [id].tsx ~ line 46 ~ selectedSymthoms ~  i', i)
        selectedSymthoms.push(i)
      }
    })

    router.push({
      pathname: '/confirm',
      query: {
        sympthoms: selectedSymthoms,
      },
    })
  }

  return (
    <Layout>
      <Head>
        <title>Gejala | Servo</title>
        <meta name="description" content="Memilih gejala" />
      </Head>

      <div className="py-2 flex flex-col items-center relative">
        <h1 className="prose prose-2xl font-bold">Pilih Gejala</h1>
        <span className="mb-3 mt-4">
          Mesin <span className="bg-green-200 p-1 rounded-md">{id}</span> Siap
          digunakan!
        </span>
        <span className="mb-3">Silahkan pilih gejala:</span>

        <ul className="w-4/5 mb-4">
          {sympthoms.map((name, index) => {
            return (
              <li key={index}>
                <label
                  className={`flex justify-between mb-2 p-2 py-1 border border-gray-300 rounded-md ${
                    sympthomChecked[index] ? 'bg-green-300' : ''
                  }`}
                >
                  <div className="">
                    <input
                      type="checkbox"
                      id={`symptom-id-${index}`}
                      name={name}
                      value={name}
                      checked={sympthomChecked[index]}
                      onChange={() => handleSelectSymthom(index)}
                    />
                    <span className="ml-2 prose prose-lg">{name}</span>
                  </div>
                </label>
              </li>
            )
          })}
        </ul>

        <div
          className={`sticky bg-white w-full flex flex-col justify-center bottom-0 left-0 right-0 p-4 py-2 border-t`}
        >
          <div className="flex justify-between mb-2">
            <div className="left-section">Total gejala:</div>
            <div className="right-section">{symptomCount}</div>
          </div>
          <button
            onClick={redirectToConfirmPage}
            className="p-4 bg-blue-400 rounded-md text-white text-base font-semibold"
          >
            Konfirmasi pilihan
          </button>
        </div>
      </div>
    </Layout>
  )
}
