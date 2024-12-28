import NavBox from "./NavBox";
import React, { useState } from "react";
import RoboticsLocation from "../assets/RoboticsLocation.png";

function WhoWeAre() {
  const [navBoxStuff, setNavBoxStuff] = useState(null);
  return (
    <div className="h-[50vh] w-screen bg-codePurple z-100 mt-[-1px] flex flex-row items-center z-20">
      <div className="mx-24 w-1/3 h-full flex flex-col">
        <h1 className="font-kode font-extrabold text-5xl z-10 text-white">
          Who We Are
        </h1>
        <div className="border-4 border-white w-2 rounded h-3/4 ml-12 mt-2 flex flex-col justify-around">
          <div
            className="flex items-center"
            onMouseEnter={() =>
              setNavBoxStuff(
                <img
                  className="rounded-lg transition-all"
                  src={RoboticsLocation}
                  alt="location img"
                />
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-400 text-4xl hover:text-white transition-all">
              Location
            </span>
          </div>
          <div
            className="flex items-center"
            onMouseEnter={() =>
              setNavBoxStuff(
                <p className="rounded-lg">
                  Team 5827 strives to provide equal opportunities in STEM to
                  students of all ages. By introducing FIRST to students, we
                  empower them to become future leaders and productive adults
                  using the core values of Gracious Professionalism. Click to
                  learn more about our team!
                </p>
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-400 text-4xl hover:text-white transition-all">
              Mission
            </span>
          </div>
          <div
            className="flex items-center"
            onMouseEnter={() =>
              setNavBoxStuff(
                <p className="rounded-lg">
                  Ever since our founding in 2016, team 5827 has been a
                  tight-knit group of High School robotics enjoyers working
                  together to produce the best robots we can. Click to learn
                  more about our team's history!
                </p>
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-400 text-4xl hover:text-white transition-all">
              History
            </span>
          </div>
          <div
            className="flex items-center"
            onMouseEnter={() =>
              setNavBoxStuff(
                <p className="rounded-lg">
                  In our team, we have many different sub-teams for each
                  component of the robot. Our subteams include:{" "}
                  <li>Computer Assisted Design</li>
                  <li>Build</li>
                  <li>Electronics</li>
                  <li>Finance</li>
                  <li>Programming</li>
                  <li>And more!</li>
                  Click to learn more about each of our unique subteams!
                </p>
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-400 text-4xl hover:text-white transition-all">
              Subteams
            </span>
          </div>
        </div>
      </div>
      <div className="absolute right-24">
        <NavBox stuff={navBoxStuff} />
      </div>
    </div>
  );
}

export default WhoWeAre;
