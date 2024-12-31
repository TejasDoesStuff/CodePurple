import AboutUs from "../about-components/AboutUs";
import History from "../about-components/History";
import Mission from "../about-components/Mission";
import WhatWeDo from "../about-components/WhatWeDo";
import AboutLeadership from "../about-components/AboutLeadership";

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
