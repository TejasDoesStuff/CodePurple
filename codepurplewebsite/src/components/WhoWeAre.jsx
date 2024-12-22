function WhoWeAre() {
    return (
      <div className="h-[50vh] w-screen bg-[#7E44CE] z-100 absolute bottom-[-50%]">
        <div className="mx-24 w-1/3 h-full flex flex-col">
          <h1 className="font-kode font-extrabold text-5xl z-10 text-white">Who We Are</h1>
          <div className="border-4 border-white w-2 rounded h-3/4 ml-12 mt-2">
            <div className="flex items-center mt-6">
              <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
              <span className="ml-4 font-kode text-white text-4xl">Location</span>
            </div>
            <div className="flex items-center mt-10">
              <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
              <span className="ml-4 font-kode text-white text-4xl">Mission</span>
            </div>
            <div className="flex items-center mt-10">
              <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
              <span className="ml-4 font-kode text-white text-4xl">History</span>
            </div>
            <div className="flex items-center mt-10">
              <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
              <span className="ml-4 font-kode text-white text-4xl">Subteams</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default WhoWeAre;
  