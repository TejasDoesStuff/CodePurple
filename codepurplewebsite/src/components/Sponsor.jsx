function Sponsor({ image, url }) {
    return (
      <div className="w-48 h-48 mx-10 my-5">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt="Sponsor"
            className="w-full h-full object-contain rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </a>
      </div>
    );
  }
  
  export default Sponsor;