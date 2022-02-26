import { GiStrong, GiMountainClimbing } from 'react-icons/gi';

const Footer = () => {
    return (

        <footer className="p-4 bg-gradient-to-t from-yellow-300 border-t-4 border-gray-600 border-double to-yellow-200">
            <div className="flex flex-col justify-center items-center">
                <div className='flex'>
                    <GiStrong size={40} />
                    <GiMountainClimbing size={40} />
                </div>

                <p className='text-center'>
                    Copyright © {new Date().getFullYear()}{" "}<br />A Strong Boi Creation
                </p>
            </div>
        </footer>
    );
}

export default Footer;