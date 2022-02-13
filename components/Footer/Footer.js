import { GiStrong, GiMountainClimbing } from 'react-icons/gi';

const Footer = () => {
    return (

        <footer className="text-gray-600 border-t-2 border-gray-400 mx-7">
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">


                <div className="flex justify-center mt-2 space-x-6">

                    <GiStrong size={40} />
                    <GiMountainClimbing size={40} />

                </div>
                <p className='text-center'>
                    A Strong Boi Creation
                </p>
            </div>
        </footer>
    );
}

export default Footer;