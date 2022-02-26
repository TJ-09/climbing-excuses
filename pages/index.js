import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import TextExcuse from '../components/TextExcuse/TextExcuse'
import SubmitExcuse from '../components/SubmitExcuse/SubmitExcuse'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../utils/supabaseClient'


export default function Home({ user }) {
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

  const Home = () => {
    return <Card content={< Banner clicked={ChangeMode} />} />;
  };
  const Excuse = () => {
    return <Card content={<TextExcuse clicked={ChangeMode} />} />;
  };
  const ExcuseLoad = () => {
    return <Card content={<TextExcuse clicked={ChangeMode} id={router.query.q} />} />;
  };
  const SubmitEx = () => {
    return <Card content={<SubmitExcuse clicked={ChangeMode} />} />;
  };
  const Default = () => {
    return <Card content={< Banner clicked={ChangeMode} />} />;;
  };

  const ENUM_STATES = {
    home: <Home />,
    excuse: <Excuse />,
    excuseLoad: <ExcuseLoad />,
    submit: <SubmitEx />,
    default: <Default />
  };

  function EnumState({ state }) {
    return <div>{ENUM_STATES[state]}</div>;
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    router.replace('/')
  }

  return (
    <>
      <div className="bg-gradient-to-t from-yellow-400 via-gray-50 to-teal-300 flex flex-col h-screen justify-between">

        <EnumState state={mainBody}></EnumState>

        {user &&

          <aside className="p-3 text-center text-white bg-gray-800">
            <a className="text-sm font-medium underline underline-offset-1 cursor-pointer" onClick={signOut}>
              Welcome Strong Boi - {user.email.split("@")[0]}. Click here to logout
              &rarr;
            </a>
          </aside>
        }

        <Footer />

      </div>
    </>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (user) {
    return {
      props: {
        user
      }
    };
  }

  return { props: {} };
}