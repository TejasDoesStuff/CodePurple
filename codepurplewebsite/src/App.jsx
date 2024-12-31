import Navbar from "./global-components/Navbar";
import Footer from "./global-components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Unfinished from "./pages/Unfinished";
import Subteams from "./pages/Subteams";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
    <div className="w-screen flex flex-col items-center overflow-x-hidden">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Unfinished />} />
                <Route path="/subteams" element={<Subteams />} />
            </Routes>
            <Footer />
        </Router>
    </div>
    );
}

export default App;
