import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import TextExcuse from '../components/TextExcuse/TextExcuse'

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-yellow-400 via-gray-50 to-teal-300">

      <Head>
        <title>Climbing Excuses - On Demand</title>
        <meta name="Climbing Excuses - On Demand" content="Create an excuse for your climbing abilities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <section>
        <Card content={<TextExcuse />} />
      </section> */}

      <main className="">

        <Card content={<Banner />} />

      </main>

      <Footer />

    </div>
  )
}
