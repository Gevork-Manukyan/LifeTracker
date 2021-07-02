
import { useState, useEffect } from "react"
import apiClient from "services/apiClient"

export const useApp = () => {
    // user: email and token
    const [user, setUser] = useState({})
    const [error, setError] = useState(null)
    const [initialized, setInitialized] = useState(false)
    const [userExerciseList, setUserExerciseList] = useState([])
    const [userNutritionList, setUserNutritionList] = useState([])
    const [userSleepList, setUserSleepList] = useState([])

    const isAuthenticated = Boolean(initialized && user?.email)

    useEffect (() => {
        const initApp = async () => {
            const { data, error } = await apiClient.fetchUserFromToken()
            if (error) setError(error)
            if (data) setUser(data.user)
      
            // Get all the exercises, nutrition, and sleep of user loggin in and set the states
            const exercises = await apiClient.fetchUserExercises();
            
      
            setInitialized(true)
          }


        const token = localStorage.getItem("lifetracker_token")
        if (token) {
            apiClient.setToken(token)
            initApp()
        } else {
            setInitialized(true)
        }


    }, [isAuthenticated])


    const clearAppState = () => {
        setUser({})
        setError(null)
        setUserExerciseList([])
        setUserNutritionList([])
        setUserSleepList([])
    }

    return {
        user,
        setUser,
        isAuthenticated,
        error,
        userExerciseList,
        userNutritionList,
        userSleepList,
        clearAppState,
    }

}