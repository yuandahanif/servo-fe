import Layout from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

const drugs = [
  {
    name: 'topViz sembuhkan mata iritasi',
    imgSrc: '/images/topViz.webp',
    price: 40000,
  },
  {
    name: 'beneuron obat batuk',
    imgSrc: '/images/beneuron.webp',
    price: 23000,
  },
  {
    name: 'obat batuk komik sachet',
    imgSrc: '/images/komik.webp',
    price: 2000,
  },
  {
    name: 'cdr untuk tulang dan sendi',
    imgSrc: '/images/cdr.webp',
    price: 9000,
  },
  {
    name: 'laserin untuk batuk berdahak',
    imgSrc: '/images/laserin.webp',
    price: 6000,
  },
  {
    name: 'lelap tidur berkualitas',
    imgSrc: '/images/lelap.webp',
    price: 200000,
  },
  {
    name: 'listerin',
    imgSrc: '/images/listerin.webp',
    price: 200000,
  },
]

const toIdr = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

export default function Medicine() {
  const router = useRouter()
  const { sympthoms } = router.query
  const [stocks, setStocks] = useState(new Array(drugs.length).fill(0))
  const [totalPrice, setTotalPrice] = useState(0)

  const addToChart = ({ index, price }: { index: number; price: number }) => {
    setStocks((s) => {
      let tmp = [...s]
      tmp[index] += 1

      return tmp
    })

    setTotalPrice((p) => p + price)
  }

  const redirectToConfirmPage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    router.push({
      pathname: '/confirm',
      query: {
        sympthoms: [],
      },
    })
  }

  return (
    <Layout>
      <Head>
        <title>Obat | Servo</title>
        <meta name="description" content="Memilih gejala" />
      </Head>

      <div className="py-2 flex flex-col items-center relative">
        <h1 className="prose prose-2xl font-bold">Pilih Obat</h1>
        <span className="mb-3">Silahkan pilih obat:</span>

        <ul className="w-full mb-4">
          {drugs.map(({ name, imgSrc, price }, index) => {
            return (
              <li key={index}>
                <div className="flex items-center mb-2 p-2 py-1 border shadow-lg border-gray-300 rounded-md">
                  <div className="w-16 h-16">
                    <Image
                      src={imgSrc}
                      alt="me"
                      width="64"
                      height="64"
                      layout="fixed"
                    />
                  </div>
                  <div className="ml-2">
                    <div className="flex flex-col">
                      <span className="prose prose-lg line-clamp-1">
                        {name}
                      </span>
                      <span className="prose prose-sm">
                        {toIdr.format(price)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="prose prose-sm">Jumlah: </span>
                      <div className="flex-grow flex items-center w-full ml-2">
                        <button
                          type="button"
                          className="text-base p-1 px-2 text-gray-600 focus:text-green-500 focus:outline-none"
                          onClick={() => addToChart({ index, price })}
                        >
                          <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
                            />
                          </svg>
                        </button>
                        <input
                          className="text-base w-10 text-center border-b border-gray-500"
                          onChange={(e) => e.target.value}
                          value={stocks[index]}
                        />
                        <button className="text-base p-1 px-2 text-gray-600 focus:text-red-500 focus:outline-none">
                          <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div
          className={`sticky bg-white w-full flex flex-col justify-center bottom-0 left-0 right-0 p-4 py-2 border-t`}
        >
          <div className="flex justify-between mb-2">
            <div className="left-section">Total harga:</div>
            <div className="right-section">{totalPrice}</div>
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
