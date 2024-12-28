import P24GG3 from '../assets/galleryPhotos/girlsgen-2024/P24GG3.jpg';
import P24D4 from '../assets/galleryPhotos/districts-2024/P24D4.jpg';

function AboutUs() {
  return (
    <>
      <div className="h-[50vh] w-screen bg-codePurple z-100 mt-[-1px] flex flex-row items-center justify-center shadow-2xl" style={{ backgroundImage: `url(${P24D4})`, opacity: 1, backgroundPosition: 'center'}}>
        <div className="font-kode font-bold">
          <h1 className="text-white text-9xl text-center"> About Us </h1>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start w-full">
        <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 border-codePurple border-8 border-dashed">
          <img src={P24GG3} alt="P24GG3" className="h-full w-full object-cover" />
        </div>
        <div className="m-5 bg-codePurple h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 border-8 border-rgb(164, 66, 221) border-dashed flex flex-col justify-center items-center text-white">
          <p className="px-10 py-2 text-center">Team 5827 Code Purple is a high school robotics team from Kirkland, Washington. We compete in a robotics league under an organization called FIRST (For Inspiration and Recognition of Science and Technology) robotics.</p>
          <p className="px-10 py-2 text-center"> Our team is not only made up of students from Lake Washington High School, but includes many eager parents and mentors, and volunteers equally as interested in robotics.</p>
          <p className="px-10 py-2 text-center">Distinguishable features of our team include our purple color, our Kangaroo mascot, and our famous team chant of our number in binary:</p>
          <p className="px-10 py-2 text-center"><b>101 101 1000011!</b></p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;