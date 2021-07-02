import axios from "axios"

class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "lifetracker_token" 
    }

    setToken (token) {
        this.token = token
        localStorage.setItem(this.tokenName, this.token)
    }

    async request ({ endpoint, method = "GET", data={} }) {
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        }

        if(this.token)
            headers["Authorization"] = `Bearer ${this.token}`

        try {
            const res = await axios ({ url, method, data, headers })
            return { data: res.data, error: null}
        } catch (err) {
            console.error(err)
            const message = err?.response?.data?.error?.message
            return { data: null, error: message || String(err) }
        }

    }

    async fetchUserFromToken () {
        return await this.request({ endpoint: "auth/me", method: "GET"})
    }

    async loginUser(credentials) { 
        return await this.request({ endpoint: "auth/login", method: "POST", data: credentials})
    }

    async signupUser(credentials) {
        return await this.request({ endpoint: "auth/register", method: "POST", data: credentials})
    }

    async fetchUserExercises() {
        return await this.request({ endpoint: `activities/exercise/`, method: `GET` })
    }

    async createNewExercise({ newExercise }) {
        return await this.request({ endpoint: `activities/exercise/`, method: `POST`, data: { newExercise } })
    }

    async createNewNutrition(newNutrition) {
        return await this.request({ endpoint: `activities/nutrition/`, method: `POST`, data: { newNutrition } })
    }

    async createNewSleep(newSleep) {
        return await this.request({ endpoint: `activities/sleep/`, method: `POST`, data: { newSleep } })
    }

}

export default new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001")