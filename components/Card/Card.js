

const Card = ({ content }) => {
    return (

        <div className="p-1 shadow-xl bg-gradient-to-r from-blue-500 via-white to-yellow-500 rounded-2xl m-6">
            <div className="block p-6 bg-white sm:p-8 rounded-xl">
                <div className="sm:pr-8">
                    {content}
                </div>
            </div>
        </div>

    );
}

export default Card;