import { supabase } from '../utils/supabaseClient'
import { useState, useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Review = () => {
    const router = useRouter();
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        console.log('getting data from server');
        let { data, error } = await supabase
            .from('excuses')
            .select('*')
            .eq('published', false)
        setContent(data)
        setLoading(false)
    }

    const publishChange = (id) => {
        // Make a shallow copy of the items
        let newContent = [...content];

        // get id location from the array
        const elementPos = content.map(function (x) { return x.id; }).indexOf(id);
        let item;
        if (newContent[elementPos].published) {
            // if true then make it false
            item = {
                ...newContent[elementPos],
                published: false
            }
        } else {
            // if publish is false make true
            item = {
                ...newContent[elementPos],
                published: true
            }
        }
        // put the new one back
        newContent[elementPos] = item;
        // set the state from copy
        setContent(newContent)
    }

    const updateData = async () => {
        console.log('publishing')

        const { data, error } = await supabase
            .from('excuses')
            .upsert(content)

        // router.replace('/', undefined, { shallow: true })
    }

    let tableData;
    if (content) {
        tableData = content.map(row => (
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-200" key={row.id}>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.id}</td> */}
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {row.submitted_by}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {row.excuse_text}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <input id="checkbox-all" onClick={() => publishChange(row.id)} type="checkbox" className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
                            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                        </div>
                    </div>
                </td>
            </tr>
        ))
    }


    return (
        <div className="bg-gradient-to-t from-yellow-400 via-gray-50 to-teal-300 flex flex-col h-screen justify-between">

            <main className='py-4'>
                <div className="flex justify-center">
                    <div className="p-1 shadow-xl bg-gradient-to-r from-blue-500 via-white to-yellow-500 rounded-2xl m-6 max-w-4xl">
                        <div className="block p-6 bg-white sm:p-8 rounded-xl">

                            <div className='flex justify-between pb-2'>
                                <AiOutlineHome onClick={() => router.replace('/', undefined, { shallow: true })} size={20} className="text-gray-400 cursor-pointer" />
                            </div>

                            <h1 className="text-2xl font-bold sm:text-3xl text-center">Review Submitted Excuses</h1>
                            <p className="text-gray-500 text-center py-4">The excuses submitted for review, careful when deleting!</p>
                            {loading ?
                                <div className='flex justify-center'>
                                    <svg role="status" className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div>
                                :
                                <>
                                    <div className="row flex flex-center">


                                        <div className="flex flex-col">
                                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                    <div className="overflow-hidden">
                                                        <table className="min-w-full">
                                                            <thead className="bg-white border-b text-center">
                                                                <tr>
                                                                    {/* <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                        ID
                                                                    </th> */}
                                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                        Submitted By
                                                                    </th>
                                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                        Excuse
                                                                    </th>
                                                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                        Publish
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {tableData}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center'>

                                        <button onClick={updateData} className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg">
                                            Submit Changes
                                        </button>
                                    </div>
                                </>}
                        </div>
                    </div>
                </div>
            </main >

        </div >
    );
}

export default Review;

export async function getServerSideProps({ req }) {
    const { user } = await supabase.auth.api.getUserByCookie(req);

    if (!user) {
        return { props: {}, redirect: { destination: '/' } };
    }

    return { props: {} };
}