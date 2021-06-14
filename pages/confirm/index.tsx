import Layout from '../../components/layout'
import Head from 'next/head'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

const sympthomsFromDB = [
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

export default function Confirm() {
  const router = useRouter()
  const { sympthoms } = router.query

  const redirectToBuyPage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    router.push({
      pathname: '/medicine',
      query: {
        sympthoms: [],
      },
    })
  }

  return (
    <Layout>
      <Head>
        <title>Konfirmasi | Servo</title>
        <meta name="description" content="Memilih gejala" />
      </Head>

      <div className="py-2 flex flex-col items-center">
        <h1 className="prose prose-2xl font-bold">Konfirmasi Gejala</h1>

        <div className="my-4 px-2">
          {/* TODO: pake pdf aja biar lebih bagus :v */}
          <p className="prose prose-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            accusantium libero vero blanditiis architecto earum rem ad atque
            nesciunt, soluta maiores eaque. Error commodi libero iure eos
            sapiente explicabo quae similique odio molestias ullam veritatis
            porro quibusdam deserunt eligendi culpa rem quisquam hic deleniti
            consectetur illum blanditiis, sit, maiores voluptatum! Quisquam
            vitae a, nesciunt quas voluptas, repudiandae eaque perspiciatis
            minima in, debitis possimus unde obcaecati voluptatem ducimus illo
            accusantium quo dolorem aut error? Alias nam esse inventore
            doloremque eaque quidem aspernatur qui. Eaque pariatur ducimus
            maiores nulla consectetur est voluptas facilis reprehenderit, culpa
            ipsa error provident eos, iusto laudantium doloremque!
          </p>
        </div>

        <div
          className={`bg-white w-full flex flex-col justify-center p-4 py-2 border-t`}
        >
          <button
            onClick={redirectToBuyPage}
            className="p-4 bg-blue-400 rounded-md text-white text-base font-semibold"
          >
            Beli obat
          </button>
        </div>
      </div>
    </Layout>
  )
}
