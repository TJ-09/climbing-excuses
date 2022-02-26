import Card from "../components/Card/Card";
import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const router = useRouter()

    const handleLogin = async (email) => {
        try {
            setLoading(true)
            const { error } = await supabase.auth.signIn({ email })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
            router.replace('/', undefined, { shallow: true });
        }
    }

    return (
        <div className="bg-gradient-to-t from-yellow-400 via-gray-50 to-teal-300 flex flex-col h-screen justify-between">

            <main className='py-4'>

                <Card content={
                    <div className="row flex flex-center">
                        <div className="col-6 form-widget">
                            <h1 className="text-2xl font-bold sm:text-3xl text-center">I hear a lot of excuses!</h1>
                            <p className="text-gray-500 text-center py-4">Sign in via magic link with your email below - if you are one of us!</p>
                            <div>
                                <input
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    type="email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleLogin(email)
                                    }}
                                    className="inline-block mt-4 px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
                                    disabled={loading}
                                >
                                    <span>{loading ? 'Loading' : 'Send magic link'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                } />

            </main>

        </div>

    );
}

export default Login;