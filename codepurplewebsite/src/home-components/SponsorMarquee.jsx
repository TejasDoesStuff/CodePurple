import Marquee from "react-fast-marquee";

function SponsorMarquee() {
  return (
    <div className="flex space-y-2 flex-col text-center mb-14">
      <Marquee pauseOnHover autoFill direction="left">
        <div className="bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64">
          <img src="https://placehold.co/400" alt="" />
        </div>
      </Marquee>
      <Marquee pauseOnHover autoFill direction="right">
        <div className="bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64">
          <img src="https://placehold.co/400" alt="" />
        </div>
      </Marquee>
    </div>
  );
}

export default SponsorMarquee;