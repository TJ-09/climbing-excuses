import { AiOutlineHome, AiOutlineShareAlt } from 'react-icons/ai';
import React, { useState } from 'react';
import useSwr from 'swr'
import ShareLink from '../ShareLink/ShareLink';

const fetcher = (url) => fetch(url).then((res) => res.json())

const TextExcuse = ({ clicked, id }) => {
    const [openShare, setOpenShare] = useState(false);

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
        // setShareLink(urlLink + (data.id * 215))
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

                // Share box here
                <ShareLink excuseId={data.id} />
            }

        </>

    );
}

export default TextExcuse;