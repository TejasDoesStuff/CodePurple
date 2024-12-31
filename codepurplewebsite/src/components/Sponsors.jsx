import Sponsor from './Sponsor';

function Sponsors({ sponsors = [] }) {
  return (
    <div className="h-[80vh] w-full bg-codePurple">
      <div className="mx-24 my-16">
        <div className="relative flex flex-row justify-start items-center gap-10">
          <div className="border-white border-8 rounded-full w-full h-0 absolute right-[-30%]"></div>
          <h1 className="font-kode font-extrabold text-7xl z-10 text-white">
            Sponsors
          </h1>
        </div>
        <div className="flex flex-wrap mt-10 gap-10">
          {sponsors.map((sponsor, index) => (
            <Sponsor key={index} image={sponsor.image} url={sponsor.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;