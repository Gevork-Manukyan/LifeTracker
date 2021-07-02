import axios from "axios"

class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        // this.tokenName = 
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