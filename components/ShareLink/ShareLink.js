import { FaCopy } from 'react-icons/fa';


const ShareLink = ({ excuseId }) => {

    const urlLink = `https://${process.env.NEXT_PUBLIC_URL}?q=`

    let shareLink = urlLink + (excuseId * 215);

    return (
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
    );
}

export default ShareLink;