import temp from "../assets/galleryPhotos/districts-2024/P24D7.jpg";

function BusinessScreen() {
  return (
    <div className="w-full h-screen bg-business flex flex-row items-center justify-center">
      <div className="w-1/2 h-screen text-white flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-center font-kode m-10"><u>Business Team</u></h1>
        </div>
        <div className="w-full h-1/2 flex flex-col m-2 px-10">
          <p className="text-lg text-left m-3"></p>
        </div>
        <div className="w-full h-1/4 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-kode text-left m-5">Current Leadership:</h1>
          <h1 className="text-4xl font-kode text-left mx-5">Rohan Chilukuri, Emi Elman</h1>
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

export default BusinessScreen;