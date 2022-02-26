const Banner = ({ clicked }) => {
    return (

        <section className="text-gray-600" role="banner">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 sm:py-36 lg:flex lg:items-center">
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
                        Climbing is hard and our buddies don&apos;t understand the challenges we face on the wall when they are just shouting random beta from the ground...Help them understand with this helpful tool.
                    </p>

                    <div className="mt-8 justify-center flex flex-col">
                        <button onClick={() => clicked('excuse')} className="self-center w-56 px-5 py-3 font-medium text-white bg-blue-400 rounded-lg hover:bg-blue-700">
                            Get an Excuse
                        </button>
                        <p className="text-center py-2 my-2">Or</p>

                        <button onClick={() => clicked('submit')} className="self-center w-56 px-5 py-3 font-medium text-white bg-blue-400 rounded-lg hover:bg-blue-700">
                            Submit an Excuse
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;