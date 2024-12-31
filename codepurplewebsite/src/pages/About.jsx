import AboutUs from "../components/AboutUs";
import History from "../components/History";
import Mission from "../components/Mission";
import WhatWeDo from "../components/WhatWeDo";
import AboutLeadership from "../components/AboutLeadership";

function About() {
    return <div className="w-screen flex flex-col items-center overflow-x-hidden">
        <AboutUs />
        <History />
        <Mission />
        <WhatWeDo />
        <AboutLeadership />
    </div>;
}

export default About;
