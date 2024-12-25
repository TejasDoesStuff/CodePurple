import TitleScreen from '../components/TitleScreen';
import Wave from '../components/Wave';
import WhoWeAre from '../components/WhoWeAre';
import Gallery from '../components/Gallery';
import Sponsors from '../components/Sponsors';

function Home() {
    return <div className="w-screen flex flex-col items-center">
        <TitleScreen />
        <Wave />
        <WhoWeAre />
        <Gallery />
        <Sponsors />
    </div>;
}

export default Home;
