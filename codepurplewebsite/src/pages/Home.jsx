import TitleScreen from '../home-components/TitleScreen';
import Wave from '../home-components/Wave';
import WhoWeAre from '../home-components/WhoWeAre';
import Gallery from '../home-components/Gallery';
import Sponsors from '../home-components/Sponsors';

import microsoft from '../assets/sponsorLogos/microsoft.png';
import ospi from '../assets/sponsorLogos/ospi.jpeg';
import boeing from '../assets/sponsorLogos/boeing.png';


const sponsorImages = [
    {image: microsoft, url: 'https://www.microsoft.com/'},
    {image: ospi, url: 'https://www.k12.wa.us/'},
    {image: boeing, url: 'https://www.boeing.com/'}
];

function Home() {
    return <div className="w-screen flex flex-col items-center">
        <TitleScreen />
        <Wave />
        <WhoWeAre />
        <Gallery />
        <Sponsors sponsors={sponsorImages}/>
    </div>;
}

export default Home;
