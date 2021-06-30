import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { NavBar, Home, Login, Signup, ActivityPage, ActivityDetails } from "components"


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
                    <Route path="/exercise" element={<ActivityDetails  />} />
                    <Route path="/nutrition" element={<ActivityDetails />} />
                    <Route path="/sleep" element={<ActivityDetails  />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;