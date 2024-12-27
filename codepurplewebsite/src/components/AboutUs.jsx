function AboutUs() {
  return (
    <>
      <div className="h-[50vh] w-screen bg-codePurple z-100 mt-[-1px] flex flex-row items-center justify-center">
        <div className="font-kode font-bold">
          <h1 className="text-white text-9xl text-center"> About Us </h1>
          {/* put img here */}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start w-full">
        <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 border-codePurple border-8 border-dashed">
        </div>
        <div className="m-5 bg-codePurple h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 border-8 border-rgb(164, 66, 221) border-dashed flex justify-center items-center text-white">
          <p>testing</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;