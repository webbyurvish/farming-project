import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Hii</h1>
      </Layout>
    </>
  )
}
