import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useApp } from "hooks/useApp"

import { NavBar, Home, Login, Signup, ActivityPage, ActivityDetails, ExerciseForm, NutritionForm, SleepForm } from "components"


function App() {

    const { 
        user, 
        setUser,
        isAuthenticated,
        error,
        userExerciseList,
        userNutritionList,
        userSleepList,
        clearAppState,
    } = useApp()

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar user={user} setUser={setUser} clearAppState={clearAppState} isAuthenticated={isAuthenticated} />
                
                <Routes>
                    <Route path="/" element={<Home  />} />
                    <Route path="/login" element={<Login user={user} setUser={setUser} />} />
                    <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
                    <Route path="/activity" element={<ActivityPage />} />
                    <Route path="/exercise" element={<ActivityDetails type='exercise' userExerciseList={userExerciseList} userNutritionList={userNutritionList} userSleepList={userSleepList} />} />
                    <Route path="/exercise/create" element={<ExerciseForm />} />
                    <Route path="/nutrition" element={<ActivityDetails type='nutrition' />} />
                    <Route path="/nutrition/create" element={<NutritionForm />} />
                    <Route path="/sleep" element={<ActivityDetails type='sleep' />} />
                    <Route path="/sleep/create" element={<SleepForm />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;