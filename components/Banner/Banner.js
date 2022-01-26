const Banner = () => {
    return (

        <section className="text-gray-600" role="banner">
            <div className="px-4 py-18 mx-auto sm:px-6 lg:px-8 sm:py-36 lg:flex lg:items-center">
                <div className="max-w-3xl mx-auto text-center">
                    <h1
                        className="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    >
                        Lorem ipsum dolor sit amet consectetur.
                    </h1>

                    <p className="max-w-xl mx-auto text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique necessitatibus dolorem soluta,
                        recusandaefacere error.
                    </p>

                    <div className="mt-8 sm:justify-center sm:flex">
                        <a href="" className="block px-5 py-3 font-medium text-white bg-blue-400 rounded-lg hover:bg-blue-700">
                            Get an Excuse
                        </a>
                    </div>
                    <div className="mt-8 sm:justify-center sm:flex">
                        <a href="" className="block px-5 py-3 font-medium text-white bg-blue-400 rounded-lg hover:bg-blue-700">
                            Gravity Checker
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;