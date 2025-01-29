import temp from "../assets/galleryPhotos/districts-2024/P24D7.jpg";
import finance from "../assets/subteamPhotos/electronics.png";
import finance1 from "../assets/subteamPhotos/electronics2.png";


function FinanceScreen() {
  return (
    <div className="w-full h-full bg-finance flex flex-row items-center justify-center">
      <div className="w-1/2 h-full text-black flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-center font-kode m-10"><u>Finance Team</u></h1>
        </div>
        <div className="w-full h-1/2 flex flex-col m-2 px-10 justify-center">
          <p className="text-lg text-left m-3">The Finance team handles all of the financial operations which take place behind the scenes. What many people don't know, is that robotics can become very expensive very quickly. The Finance team manages all the team's expenses, while also raising money through opportunities.</p>
          <p className="text-lg text-left m-3">The Finance team is responsible for contacting and reaching out to sponsors in search of sponsorships for the team. All the team's sponsors are gained through the work of Finance Team members, and these sponsors prove to be crucial in the development of our team.</p>
          <p className="text-lg text-left m-3">This subteam is also responsible for other methods of team income. For example, the Finance team handles fundraising through volunteering, sporting events, etc. Additionally, all the expenses of the team must go through the Finance team before they can be purchased. </p>
        </div>
        <div className="w-full h-1/4 mb-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-kode text-left m-5">Current Leadership:</h1>
          <h1 className="text-4xl font-kode text-left mx-5">Rohan Chilikuri</h1>
        </div>
      </div>
      {/* <div className="w-1/2 h-full text-white flex flex-col items-center justify-center">
        <div className="w-full h-1/2">
          <img src={temp} alt="Large" className="w-full h-full object-cover border-t-0 border-r-0 border-white border-4" />
        </div>
        <div className="w-full h-1/2 flex">
          <img src={temp} alt="Small 1" className="w-1/2 h-full object-cover border-l-4 border-white" />
          <img src={temp} alt="Small 2" className="w-1/2 h-full object-cover border-l-4 border-white" />
        </div>
      </div> */}
    </div>
  );
}

export default FinanceScreen;