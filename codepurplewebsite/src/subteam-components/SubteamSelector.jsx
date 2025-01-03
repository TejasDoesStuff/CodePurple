import { useState } from "react";

function SubteamSelector() {
  const [showButton, setShowButton] = useState(false);
  const [somethingChosen, setSomethingChosen] = useState(false);

  const thechosenone = (thing) => {
    if(somethingChosen === false) {
      setTimeout(() => {
        setShowButton(true);
      }, 1000);
      if (!document.querySelector(`.${thing}`).classList.contains("chosen")) {
        document
          .querySelector(`.${thing}`)
          .classList.add("chosen", "z-10", "scale-[3000%]");
  
        document
          .querySelector(`.${thing}-text`)
          .classList.add("opacity-0", "chosen-text");
      }
        setSomethingChosen(true);
    }
    else {
      return;
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
    setTimeout(() => { setSomethingChosen(false); }, 1100);
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
          className="close absolute mx-8 my-8 z-20 right-0 top-0 p-4 bg-codePurple text-white rounded-full drop-shadow-2xl"
        >
          Close
        </div>
      )}
    </div>
  );
}

export default SubteamSelector;
