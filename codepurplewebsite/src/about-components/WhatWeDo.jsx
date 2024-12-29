function WhatWeDo() {
  return (
    <div className="flex flex-row items-start justify-start w-full bg-codePurple">
      <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 flex justify-center items-center text-white relative">
        <h1 className="font-kode font-bold text-white text-9xl text-center z-10">
          Our Subteams
        </h1>
      </div>
      <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 flex flex-col justify-center items-center text-white text-xl relative border-white border-2">
        <p className="px-10 py-2 text-left relative z-10">
          5827 is split up into many different subteams which all play an equal
          part in the success of our team.
        </p>
        <p className="px-10 py-2 text-left relative z-10">
          Some of the subteams are...{" "}
          <li>Computer Assisted Design - designing our robot</li>{" "}
          <li>Electronics - wiring the robot</li>{" "}
          <li>Programming - coding the robot</li>
          and many more.
        </p>
        <a
          className="p-4 my-6 font-bold border-white border-4 rounded-full text-white hover:bg-white hover:text-codePurple hover:border-codePurple transition-all duration-300 hover:px-16"
          href="/subteams"
        >
          Learn more about the subteams!
        </a>
      </div>
    </div>
  );
}

export default WhatWeDo;
