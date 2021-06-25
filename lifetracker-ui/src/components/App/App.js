import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar       from "../NavBar/NavBar";
import Home         from "../Home/Home"
import Login        from "../Login/Login";
import Signup       from "../Signup/Signup";
import ActivityPage from "../ActivityPage/ActivityPage";
import Exercise     from "../Exercise/Exercise";
import Nutrition    from "../Nutrition/Nutrition";
import Sleep        from "../Sleep/Sleep";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home  />} />
                    <Route path="/login" element={<Login  />} />
                    <Route path="/signup" element={<Signup  />} />
                    <Route path="/activity" element={<ActivityPage  />} />
                    <Route path="/exercise" element={<Exercise  />} />
                    <Route path="/nutrition" element={<Nutrition />} />
                    <Route path="/sleep" element={<Sleep  />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;