import temp from "../assets/galleryPhotos/districts-2024/P24D7.jpg";

function PersonCard({
  name = "name",
  title = "title",
  description = "description",
  image = temp,
  variant = "white",
  text = "black"
}) {
  return (
    <div className={`w-80 h-auto bg-${variant} flex flex-col items-center justify-start shadow-lg rounded-lg flex-shrink-0 overflow-x text-center m-4 text-${text}`}>
      <div className="p-6">
        <div className="h-auto w-full rounded-full my-4 flex-shrink-0 flex justify-center items-center">
            <img src={image} alt={name} className="h-48 w-48 rounded-full object-cover" />
        </div>
        <h2 className="font-kode font-bold text-2xl">{name}</h2>
        <h3 className="font-kode text-lg">{title}</h3>
        <div className="max-h-48 p-4 w-full">
          <p className="font-cooper text-left">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
