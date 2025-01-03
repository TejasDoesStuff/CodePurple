import { useState, useEffect } from "react";
import BuildScreen from './BuildScreen.jsx';
import CodeScreen from './CodeScreen.jsx';
import DesignScreen from './DesignScreen.jsx';
import SafetyScreen from './SafetyScreen.jsx';
import ElectronicsScreen from "./ElectronicsScreen.jsx";
import BusinessScreen from "./BusinessScreen.jsx";

function SubteamSelector() {
  const [showButton, setShowButton] = useState(false);
  const [somethingChosen, setSomethingChosen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const [showBuildScreen, setShowBuildScreen] = useState(false);
  const [showCodeScreen, setShowCodeScreen] = useState(false);
  const [showDesignScreen,setShowDesignScreen] = useState(false);
  const [showSafetyScreen, setShowSafetyScreen] = useState(false);
  const [showElectronicsScreen, setShowElectronicsScreen] = useState(false);
  const [showBusinessScreen, setShowBusinessScreen] = useState(false);

  const thechosenone = (thing) => {
    if (somethingChosen === false) {
      setTimeout(() => {
        setShowButton(true);
      }, 500);
      if (!document.querySelector(`.${thing}`).classList.contains("chosen")) {
        document
          .querySelector(`.${thing}`)
          .classList.add("chosen", "z-10", "scale-[3000%]");

        document
          .querySelector(`.${thing}-text`)
          .classList.add("opacity-0", "chosen-text");
      }
      setSomethingChosen(true);

      if (thing === "build") setShowBuildScreen(true);
      if (thing === "code") setShowCodeScreen(true);
      if(thing === "design") setShowDesignScreen(true);
      if(thing ==='safety') setShowSafetyScreen(true);
      if(thing === 'electronics') setShowElectronicsScreen(true);
      if(thing === 'business') setShowBusinessScreen(true);
      else return;
    }
  };

  const notthechosenone = () => {
    setShowButton(false);
    const element = document.querySelector(".chosen");
    if (element) {
      element.classList.remove("chosen", "scale-[3000%]");
      setTimeout(() => {
        element.classList.remove("z-10");
        document
          .querySelector(`.chosen-text`)
          .classList.remove("opacity-0", "chosen-text");
        document.querySelector(`.chosen-text`).classList.add("opacity-100");
      }, 1000);
    }
    setFadeOut(true);
    setTimeout(() => {
      setSomethingChosen(false);
      setShowBuildScreen(false);
      setShowCodeScreen(false);
      setShowDesignScreen(false);
      setShowSafetyScreen(false);
      setShowElectronicsScreen(false);
      setShowBusinessScreen(false);
      setFadeOut(false);
    }, 1000);
  };

  return (
    <div className="h-[94vh] w-full flex justify-center items-center bg-white relative overflow-hidden">
      <div className="w-full max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-8 p-8">
        <div
          onMouseDown={() => thechosenone("build")}
          className="build aspect-square h-64 bg-build rounded-xl drop-shadow-2xl transition-all duration-1000 flex items-center justify-center"
        >
          <p className="build-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Build
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("code")}
          className="code aspect-square h-64 bg-code rounded-xl drop-shadow-2xl transition-all duration-1000 flex items-center justify-center"
        >
          <p className="code-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Code
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("design")}
          className="design aspect-square h-64 bg-design rounded-xl drop-shadow-2xl transition-all duration-1000 flex items-center justify-center"
        >
          <p className="design-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Design
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("safety")}
          className="safety aspect-square h-64 bg-safety rounded-xl drop-shadow-2xl transition-all duration-1000 flex items-center justify-center"
        >
          <p className="safety-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Safety
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("electronics")}
          className="electronics aspect-square h-64 bg-electronics rounded-xl drop-shadow-2xl transition-all duration-1000 flex items-center justify-center"
        >
          <p className="electronics-text text-white font-bold font-kode text-4xl transition-all duration-1000">
            Electronics
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("business")}
          className="business aspect-square h-64 bg-business rounded-xl drop-shadow-2xl transition-all duration-1000 flex items-center justify-center"
        >
          <p className="business-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Business
          </p>
        </div>
      </div>
      {showButton && (
        <div
          onMouseDown={() => notthechosenone()}
          className="close absolute mx-8 my-8 z-40 right-0 top-0 p-4 bg-codePurple text-white rounded-full drop-shadow-2xl fade-in show"
        >
          Close
        </div>
      )}
      {showBuildScreen && (
        <div className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? 'fade-out' : 'floatin'}`}>
          <BuildScreen />
        </div>
      )}
      {showCodeScreen && (
        <div className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? 'fade-out' : 'floatin'}`}>
          <CodeScreen />
        </div>
      )}
      {showDesignScreen && (
        <div className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? 'fade-out' : 'floatin'}`}>
          <DesignScreen />
        </div>
      )}
      {showSafetyScreen && (
        <div className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? 'fade-out' : 'floatin'}`}>
          <SafetyScreen />
        </div>
      )}
      {showElectronicsScreen && (
        <div className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? 'fade-out' : 'floatin'}`}>
          <ElectronicsScreen />
        </div>
      )}
      {showBusinessScreen && (
        <div className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? 'fade-out' : 'floatin'}`}>
          <BusinessScreen />
        </div>
      )}
    </div>
  );
}

export default SubteamSelector;