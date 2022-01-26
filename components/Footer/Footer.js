import Image from 'next/image'
import { GiStrong, GiMountainClimbing } from 'react-icons/gi';

const Footer = () => {
    return (
        <footer className="text-gray-500 border-t-1 border-black">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* <nav className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-6"> */}
                    {/* <a href="" className="hover:opacity-75">Uses</a>
                        <a href="" className="hover:opacity-75">Snippets</a>
                        <a href="" className="hover:opacity-75">Bookmarks</a>
                        <a href="" className="hover:opacity-75">Courses</a>
                        <a href="" className="hover:opacity-75">Downloads</a>
                        <a href="" className="hover:opacity-75">Projects</a> */}
                    {/* </nav> */}

                    <div className="flex justify-center mt-8 space-x-6">

                        <GiStrong size={40} />
                        <GiMountainClimbing size={40} />

                    </div>
                    <p className='text-center'>
                        A Strong Boi Creation
                    </p>
                </div>
            </div>
        </footer>


    );
}

export default Footer;