import TitleScreen from '../components/TitleScreen';
import Wave from '../components/Wave';
import WhoWeAre from '../components/WhoWeAre';
import Gallery from '../components/Gallery';
import Sponsors from '../components/Sponsors';

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
