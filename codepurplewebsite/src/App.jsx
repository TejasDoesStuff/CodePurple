import TitleScreen from "./components/TitleScreen";
import Navbar from "./components/Navbar";
import Wave from "./components/Wave";


function App() {
    return <div className="w-screen flex flex-col items-center">
        <Navbar />
        <TitleScreen />
        <Wave />
    </div>;
}

export default App;