import temp from "../assets/galleryPhotos/districts-2024/P24D7.jpg";

function BuildScreen() {
  return (
    <div className="w-full h-screen bg-build flex flex-row items-center justify-center">
      <div className="w-1/2 h-screen text-white flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-center">
          <h1 className="text-7xl font-bold text-center font-kode m-10"><u>Build Team</u></h1>
        </div>
        <div className="w-full h-1/2 flex flex-col m-2 px-10">
          <p className="text-lg text-left m-3">Build team is responsible for the physical construction of the robot body. They work closely with the Computer Assisted Design (CAD) team in order to produce the robot parts using various machines.</p>
          <p className="text-lg text-left m-3">The build team mainly works in the wood and metal shops, where most of the machines are located. At the start of the year, new members are trained in basic shop safety, how to use the machines, and how to work effectively together to make robot parts.</p>
          <p className="text-lg text-left m-3">Initially, parts are made of wood for prototyping, then are moved to more concrete materials to be used in the robot. During the season, build team members work hard to deliver a sturdy product in the shortest amount of time possible.</p>
        </div>
        <div className="w-full h-1/4 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-kode text-left m-5">Current Leadership:</h1>
          <h1 className="text-4xl font-kode text-left mx-5">Aimal Samir</h1>
        </div>
      </div>
      <div className="w-1/2 h-screen text-white flex flex-col items-center justify-center">
        <div className="w-full h-1/2">
          <img src={temp} alt="Large" className="w-full h-full object-cover border-t-0 border-r-0 border-white border-2" />
        </div>
        <div className="w-full h-1/2 flex">
          <img src={temp} alt="Small 1" className="w-1/2 h-full object-cover border-l-2 border-white" />
          <img src={temp} alt="Small 2" className="w-1/2 h-full object-cover border-l-2 border-white" />
        </div>
      </div>
    </div>
  );
}

export default BuildScreen;