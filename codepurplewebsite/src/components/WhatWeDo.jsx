

function WhatWeDo() {
    return (
        <div className="flex flex-row items-start justify-start w-full bg-codePurple">
            <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 flex justify-center items-center text-white relative">
                <h1 className="font-kode font-bold text-white text-9xl text-center z-10">Our Subteams</h1>
            </div>
            <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 flex flex-col justify-center items-center text-white text-xl relative border-white border-2">
                <p className="px-10 py-2 text-center relative z-10">5827 is split up into many different subteams which all play an equal part in the success of our team.</p>
                <p className="px-10 py-2 text-center relative z-10">We have a subteam for Computer Assisted Design, which is responsible for designing our robot, a subteam for Electronics which is responsible for all the wiring, a subteam for Programming which is responsible for coding the robot, and many more.</p>
                <a className="px-10 py-10 text-center relative z-10 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500" href="/subteams">Click Here to Learn More About All Our Subteams!</a>
            </div>
        </div>
    )
}

export default WhatWeDo;