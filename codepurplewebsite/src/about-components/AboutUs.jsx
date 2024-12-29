import P24GG3 from "../assets/galleryPhotos/girlsgen-2024/P24GG3.jpg";
import P24D4 from "../assets/galleryPhotos/districts-2024/P24D4.jpg";

function AboutUs() {
  const waveText = "101 101 1000011!".split("").map((char, index) => (
    <span
      key={index}
      style={{ animationDelay: `${index * 0.2}s` }}
      className="wave2"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
  return (
    <>
      <div className="relative h-[80vh] w-screen bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${P24D4})`, opacity: 0.2 }}
        >
          {" "}
        </div>
        <div className="relative w-full h-full flex items-center justify-center">
          <h1 className="text-white text-9xl text-center font-kode font-bold">
            {" "}
            About Us{" "}
          </h1>
        </div>
      </div>

      <div className="flex flex-row items-start justify-around w-full">
        <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg border-codePurple border-8 border-dashed">
          <img
            src={P24GG3}
            alt="P24GG3"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="m-5 bg-codePurple h-[50vh] w-[47vw] flex-shrink-0 rounded-lg border-8 border-rgb(164, 66, 221) border-dashed flex flex-col justify-center items-center text-white">
          <p className="px-10 py-2 text-left">
            Team 5827{" "}
            <span className="font-bold text-xl hover:bg-white hover:p-1 hover:text-codePurple transition-all duration-500">
              <a href="/home">Code Purple</a>
            </span>{" "}
            is a high school robotics team from Kirkland, Washington. We compete
            in a robotics league under an organization called{" "}
            <span className="italic font-bold text-xl hover:bg-white hover:p-1 hover:text-codePurple duration-500 transition-all">
              <a href="https://www.firstinspires.org/robotics/frc" target="_blank" rel="noopener noreferrer">FIRST®</a>
            </span>{" "}
            (For Inspiration and Recognition of Science and Technology)
            robotics.
          </p>
          <p className="px-10 py-2 text-left">
            {" "}
            Our team is not only made up of students from{" "}
            <span className="font-bold text-xl hover:bg-white hover:p-1 hover:text-codePurple duration-500 transition-all">
              <a href="http://lwhs.lwsd.org" target="_blank" rel="noopener noreferrer">Lake Washington High School</a>
            </span>
            , but includes many eager parents and mentors, and volunteers
            equally as interested in robotics.
          </p>
          <p className="px-10 py-2 text-left">
            Distinguishable features of our team include our purple color, our
            Kangaroo mascot, and our famous team chant of our number in binary:
          </p>
          <p className="px-10 py-2 text-center text-2xl font-kode">
            {waveText}
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
