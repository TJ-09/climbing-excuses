import '../styles/globals.css'
import Head from 'next/head'
import { supabase } from '../utils/supabaseClient'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      updateSupabaseCookie(event, session);
    });

    return () => {
      authListener?.unsubscribe();
    };
  });

  async function updateSupabaseCookie(event, session) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  }


  return (
    <>
      <Head>
        <title>Climbing Excuses - On Demand</title>
        <meta name="Climbing Excuses - On Demand" content="Create an excuse for your climbing abilities" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Create an excuse for your climbing abilities"></meta>
        <meta property="og:title" content="Climbing Excuses - On Demand" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://climbingexcuses.com" />
        <meta property="og:image" content="https://climbingexcuses.com/apple-touch-icon.png" />
        <meta property="og:description" content="Create an excuse for your climbing abilities" />
        <meta property="og:site_name" content="Climbing Excuses" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta charSet="UTF-8"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
