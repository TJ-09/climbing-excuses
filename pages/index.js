import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import TextExcuse from '../components/TextExcuse/TextExcuse'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useCallback } from 'react';

export default function Home() {
  const router = useRouter()

  const [mainBody, setMainBody] = useState('home');

  const ChangeMode = useCallback((mode) => {
    if (mode === 'home') {
      router.replace('/', undefined, { shallow: true });
    }
    setMainBody(mode)
  }, [router]);

  useEffect(() => {
    if (router.query.q) {
      // there is a query
      // comes in title, btn, active
      ChangeMode('excuseLoad'); // excuse mode
    }

  }, [router.query.q, ChangeMode])



  // const ChangeMode = (mode) => {
  //   if (mode === 'home') {
  //     router.replace('/', undefined, { shallow: true });
  //   }
  //   setMainBody(mode)
  // }

  const Home = () => {
    return <Card content={< Banner clicked={ChangeMode} />} />;
  };
  const Excuse = () => {
    return <Card content={<TextExcuse clicked={ChangeMode} />} />;
  };
  const ExcuseLoad = () => {
    return <Card content={<TextExcuse clicked={ChangeMode} id={router.query.q} />} />;
  };
  const Default = () => {
    return <Card content={< Banner clicked={ChangeMode} />} />;;
  };

  const ENUM_STATES = {
    home: <Home />,
    excuse: <Excuse />,
    excuseLoad: <ExcuseLoad />,
    default: <Default />
  };

  function EnumState({ state }) {
    return <div>{ENUM_STATES[state]}</div>;
  }

  return (
    <>
      <Head>
        <title>Climbing Excuses - On Demand</title>
        <meta name="Climbing Excuses - On Demand" content="Create an excuse for your climbing abilities" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="bg-gradient-to-t from-yellow-400 via-gray-50 to-teal-300 flex flex-col h-screen justify-between">

        <main className='py-4'>

          <EnumState state={mainBody}></EnumState>

        </main>

        <Footer />

      </div>
    </>
  )
}
