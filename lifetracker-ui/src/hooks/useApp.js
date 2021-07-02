
import { useState, useEffect } from "react"
import apiClient from "services/apiClient"

export const useApp = () => {
    // user: email and token
    const [user, setUser] = useState({})
    const [error, setError] = useState(null)


    useEffect (() => {
        const fetchUser = async () => {
            const { data, error } = await apiClient.fetchUserFromToken()
            if (error) setError(error)
            if (data?.user) setUser(data.user)
        }

        const token = localStorage.getItem("lifetracker_token")
        if (token) {
            apiClient.setToken(token)
            fetchUser()
        }
    }, [])

    return {
        user,
        setUser,
    }

}