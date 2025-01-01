import NavBox from "./NavBox";
import React, { useState } from "react";
import RoboticsLocation from "../assets/RoboticsLocation.png";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

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
                // <div>
                //   <GoogleMap
                //     mapContainerStyle={containerStyle}
                //     center={center}
                //     zoom={10}
                //   />
                // </div>
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-400 text-4xl hover:text-white transition-all">
              <a
                href="https://www.google.com/maps/place/LWHS+Robotics+Club/@47.6733505,-122.1842013,17z/data=!3m1!4b1!4m6!3m5!1s0x549013f8a853f775:0x98de18bf1c2c60d3!8m2!3d47.6733469!4d-122.1816264!16s%2Fg%2F11rth9vqf9?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Location
              </a>
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
                  using the core values of Gracious Professionalism.
                  <br />
                  <br />
                  Click to learn more about our team!
                </p>
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-400 text-4xl hover:text-white transition-all">
              <a href="/about#mission">Mission</a> {/* make this auto scroll down to mission section? */}
            </span>
          </div>
          <div
            className="flex items-center"
            onMouseEnter={() =>
              setNavBoxStuff(
                <p className="rounded-lg">
                  Ever since our founding in 2016, team 5827 has been a
                  tight-knit group of High School robotics enjoyers working
                  together to produce the best robots we can.
                  <br />
                  <br />
                  Click to learn more about our team's history!
                </p>
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-400 text-4xl hover:text-white transition-all">
              <a href="/about#history">History</a> {/* make this auto scroll down to mission section? */}
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
                  <br />
                  Click to learn more about each of our unique subteams!
                </p>
              )
            }
            onMouseLeave={() => setNavBoxStuff(null)}
          >
            <div className="border-4 border-white rounded w-24 flex-shrink-0 min-w-[6rem]"></div>
            <span className="ml-4 font-kode text-gray-400 text-4xl hover:text-white transition-all">
              <a href="/subteams">Subteams</a>
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
