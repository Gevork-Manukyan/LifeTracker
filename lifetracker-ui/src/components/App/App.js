import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { NavBar, Home, Login, Signup, ActivityPage, Exercise, Nutrition, Sleep } from "components"


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