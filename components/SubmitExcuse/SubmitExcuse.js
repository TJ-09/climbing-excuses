import { AiOutlineHome } from 'react-icons/ai';

const SubmitExcuse = ({ clicked }) => {
    const urlLink = `https://${process.env.NEXT_PUBLIC_URL}?q=`


    const sendExcuse = async event => {
        event.preventDefault() // prevents page from redirecting on form submissiomn
        // call default function in pages/api/submit
        // send the data from form submission event to that endpoint
        const res = await fetch("/api/submit", {
            body: JSON.stringify({
                name: event.target.name.value,
                excuse: event.target.excuse.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        })

        const result = await res.json()
        console.log(result)
    }


    return (
        <>
            <div className='flex justify-between pb-2'>
                <AiOutlineHome onClick={() => clicked('home')} size={20} className="text-gray-400 cursor-pointer" />
            </div>

            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Submit your Excuse!</h1>

                    <p className="mt-4 text-gray-500">
                        We&apos;ve all heard the excuses in the gym or at the crag from our buddies. Grow our list of excuses by telling us about them, we personally filter all of them so might take some time but will give you the link when you submit.
                    </p>
                </div>

                <form onSubmit={sendExcuse} className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
                    <div>
                        <label htmlFor="name" className="sr-only">Submitted by (optional)</label>

                        <div className="relative">
                            <input
                                id='name'
                                name='name'
                                type="text"
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter name (optional)"
                            />
                        </div>
                    </div>
                    <h5 className="text-xl font-bold text-center text-gray-900">Sorry for my poor climbing,... </h5>
                    <div>
                        <label htmlFor="excuse" className="sr-only">Excuse</label>
                        <div className="relative">
                            <input
                                id='excuse'
                                name='excuse'
                                type="text"
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Tell us your excuse"
                                required
                            />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg">
                            Submit
                        </button>
                    </div>
                </form>
            </div >

        </>
    );
}

export default SubmitExcuse;