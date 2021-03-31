import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
    const [isHomeScreen, setIsHomeScreen] = useState(true);

    function renderScreen() {
        return isHomeScreen ? <Home /> : <About />;
    }
    function showHomeScreen() {
        setIsHomeScreen(true);
    }
    function showAboutScreen() {
        setIsHomeScreen(false);
    }

    return (
        <div className={"App"}>
            <Header
                showHomeScreen={showHomeScreen}
                showAboutScreen={showAboutScreen}
            />
            {renderScreen()}
        </div>
    );
}

export default App;
