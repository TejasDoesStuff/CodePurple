import React from "react";
import { FaInstagram, FaTiktok, FaEnvelope, FaYoutube } from "react-icons/fa";
import BlueAlliance from "../assets/bluealliance.svg";

function Contact() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      <div className="w-full h-80 bg-codePurple items-center justify-center flex pt-16">
        <h1 className="text-9xl font-kode text-center text-white font-bold">
          Contact
        </h1>
      </div>
      {/* broken sigma rule 19: pls perm */}
      {/* broken sigma rule number 15: never listen to anyone by listening to this rule you are listening to someone /shrug broken sigma rule number 16: pls perm drag*/}
      <div className="w-full h-auto bg-codePurple flex justify-center items-center">
        <form className="w-full p-4 shadow-md">
          <h2 className="text-4xl text-white font-bold mb-6 flex flex-col items-center py-2">
            Get in Touch{" "}
            <div className="w-64 h-auto bg-codePurple flex justify-around items-center pt-6 gap-2">
              {/* Tiktok, Youtube, Blue Alliance, -> Link tree */}
              <a
                href="https://instagram.com/codepurple5827"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-5xl hover:scale-105 transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@codepurple5827"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-5xl hover:scale-105 transition-all duration-300"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.youtube.com/@CodePurple-pm3so/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-5xl hover:scale-105 transition-all duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="mailto:frcteam5827@gmail.com"
                className="text-white text-5xl hover:scale-105 transition-all duration-300"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.thebluealliance.com/team/5827"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-5xl hover:scale-105 transition-all duration-300 w-12 h-12 flex justify-center items-center"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="72px"
                  height="112px"
                  viewBox="0 0 72 112"
                  enable-background="new 0 0 72 112"
                  xml:space="preserve"
                  className="w-12 h-12"
                >
                  <g>
                    <g>
                      <rect x="8" y="20" fill="#FFFFFF" width="6" height="64" />
                    </g>
                    <g>
                      <rect
                        x="58"
                        y="20"
                        fill="#FFFFFF"
                        width="6"
                        height="64"
                      />
                    </g>
                    <g>
                      <path
                        fill="#FFFFFF"
                        d="M36,112C20.561,112,8,99.439,8,84h6c0,12.131,9.869,22,22,22V112z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#FFFFFF"
                        d="M36,112v-6c12.131,0,22-9.869,22-22h6C64,99.439,51.439,112,36,112z"
                      />
                    </g>
                    <g>
                      <rect
                        x="33"
                        y="20"
                        fill="#FFFFFF"
                        width="6"
                        height="89"
                      />
                    </g>
                    <g>
                      <rect
                        x="11"
                        y="78"
                        fill="#FFFFFF"
                        width="50"
                        height="6"
                      />
                    </g>
                    <g>
                      <rect
                        x="11"
                        y="50"
                        fill="#FFFFFF"
                        width="50"
                        height="6"
                      />
                    </g>
                    <g id="Lamp_Rectangle_4_">
                      <path
                        fill="#FFFFFF"
                        d="M72,24c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h64c2.2,0,4,1.8,4,4V24z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </h2>

          <div className="w-full flex flex-col items-center">
            <div className="w-1/2">
              <label
                htmlFor="name"
                className="block text-white text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="rounded-lg w-full p-2 mb-4 bg-white text-black"
                placeholder="John Doe"
                required
              />

              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-lg w-full p-2 mb-4 bg-white text-black"
                placeholder="example@example.com"
                required
              />

              <label
                htmlFor="message"
                className="block text-white text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="rounded-lg w-full p-2 mb-4 bg-white text-black"
                placeholder="Your message here..."
                rows="5"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-full"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
