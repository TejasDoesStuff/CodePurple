import React from "react";
import { FaInstagram, FaTiktok, FaEnvelope, FaYoutube } from "react-icons/fa";

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
            <div className="w-56 h-auto bg-codePurple flex justify-around items-center pt-6 gap-2">
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
              <a href="https://www.tiktok.com/@codepurple5827"
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
