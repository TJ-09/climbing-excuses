import { AiOutlineHome, AiOutlineShareAlt } from 'react-icons/ai';
import { FaCopy } from 'react-icons/fa';
import React, { useState } from 'react';
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const TextExcuse = ({ clicked, id }) => {
    const [openShare, setOpenShare] = useState(false);
    const [shareLink, setShareLink] = useState('');
    const urlLink = `https://${process.env.NEXT_PUBLIC_URL}?q=`

    const { data, mutate, error } = useSwr(`/api/excuse?q=${id}`, fetcher)

    let response;
    if (error) {
        response = <div>Failed to load excuse</div>
    }
    if (!data) {
        response = <div>Loading...</div>
    }
    if (data) {
        response = <p className="text-xl font-bold text-center text-gray-900">
            {data.excuse}
        </p>
    }

    const refreshData = () => {
        setOpenShare(false);
        mutate();
    }

    const OpenSharesLink = () => {
        setShareLink(urlLink + (data.id * 215))
        setOpenShare(!openShare);
    }

    return (
        <>
            <div className='flex justify-between pb-2'>
                <AiOutlineHome onClick={() => clicked('home')} size={20} className="text-gray-400 cursor-pointer" />
                <AiOutlineShareAlt onClick={OpenSharesLink} size={20} className="text-gray-400 cursor-pointer" />
            </div>

            <h5 className="text-xl font-bold text-center text-gray-900">Sorry for my poor climbing, </h5>

            {response}

            {!id && <div className="mt-8 flex justify-center">
                <button onClick={refreshData} className="block px-5 py-3 font-medium text-white bg-blue-400 rounded-lg active:bg-blue-900 hover:bg-blue-700">
                    Another Excuse
                </button>
            </div>}

            {/* Share box */}
            {openShare &&
                <div className='text-gray-600 border-t-2 border-gray-400 mx-7 mt-6'>
                    <h3 className="px-4 text-2xl font-normal text-center leading-normal mb-2 text-gray-700 pt-6">
                        Share Link</h3>

                    <p className="px-4 py-3 mb-2 text-white bg-blue-500 rounded min-w-50 max-w-4xl text-sm shadow-lg border-0 outline-none focus:outline-none focus:ring">
                        {shareLink}
                    </p>
                    <div className='flex justify-center'>
                        <button onClick={() => { navigator.clipboard.writeText(shareLink) }} className="bg-blue-400 text-white flex justify-center items-center active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            <i><FaCopy size={25} className="pr-3" /></i> Copy Link</button>
                    </div>
                </div>
            }

        </>

    );
}

export default TextExcuse;