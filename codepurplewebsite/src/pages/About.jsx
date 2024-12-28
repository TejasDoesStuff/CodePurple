import AboutUs from "../components/AboutUs";
import History from "../components/History";
import Mission from "../components/Mission";
import WhatWeDo from "../components/WhatWeDo";

function About() {
    return <div className="w-screen flex flex-col items-center">
        <AboutUs />
        <History />
        <Mission />
        <WhatWeDo />
    </div>;
}

export default About;
