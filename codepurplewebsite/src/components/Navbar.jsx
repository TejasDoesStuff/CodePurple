import Logo from "../assets/5827_logo.jpg";

function Navbar() {
  return (
    <div className="w-[70%] h-16 bg-[#7E44CE] fixed mt-8 bg-opacity-50 rounded-2xl flex flex-row items-center z-10 ml-[10px] hover:bg-opacity-80 transition duration-300">
      <img src={Logo} alt="CodePurple" className="absolute left-[-10px] h-24 rounded-full" />
      <div className="w-full flex flex-row gap-8 justify-start ml-24">
        <a className="text-white font-kode font-extrabold text-xl">Code Purple</a>
      </div>
      <div className="w-full flex flex-row gap-8 justify-end m-8">
        <a className="text-white font-kode">Home</a>
        <a className="text-white font-kode">About</a>
        <a className="text-white font-kode">History</a>
        <a className="text-white font-kode">Sponsors</a>
      </div>
    </div>
  );
}

export default Navbar;
