const Banner = ({ clicked }) => {
    return (

        <section className="text-gray-600" role="banner">
            <div className="px-4 py-18 mx-auto sm:px-6 lg:px-8 sm:py-36 lg:flex lg:items-center">
                <div className="max-w-3xl mx-auto text-center">
                    <h1
                        className="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-900">
                        Climbing Excuses
                    </h1>
                    <h1
                        className="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-900">
                        On Demand
                    </h1>
                    <p className="max-w-xl mx-auto text-lg pt-2">
                        Climbing is hard and our buddies don&apos;t understand the challenges we face on the wall when they are just shouting random beta from the ground...Help them understand why we fell with this helpful tool.
                    </p>

                    <div className="mt-8 justify-center flex">
                        <button onClick={() => clicked('excuse')} className="block px-5 py-3 font-medium text-white bg-blue-400 rounded-lg hover:bg-blue-700">
                            Get an Excuse
                        </button>
                    </div>
                    {/* <div className="mt-8 sm:justify-center sm:flex">
                        <button href="" className="block px-5 py-3 font-medium text-white bg-blue-400 rounded-lg hover:bg-blue-700">
                            Gravity Checker
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Banner;