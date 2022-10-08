import MainPage from "./components/MainPage/MainPage";
import {useState} from "react";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import {AnimatePresence} from "framer-motion";

function App() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="App">
            <AnimatePresence>
                {isLoading ? (<LoadingPage setIsLoading={setIsLoading}/>):<MainPage/>}
            </AnimatePresence>
        </div>
    );
}

export default App;
