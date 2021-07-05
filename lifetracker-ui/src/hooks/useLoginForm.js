import apiClient from "services/apiClient"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const useLoginForm = ({ user, setUser, setUserExerciseList, setUserNutritionList, setUserSleepList }) => {

    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    useEffect(() => {
        // if logged in, take to homepage
        if (user?.email) {
            navigate("/activity")
        }
    }, [user, navigate])

    const handleTextOnChange = (evt) => {
        if (evt.target.name === "email") {
            if (evt.target.value.indexOf("@") <= 0) {
                setErrors((err) => ({ ...err, email: "Please enter a valid email." }))
            } else {
                setErrors((err) => ({ ...err, email: null }))
            }
        }

        setForm((oldForm) => ({ ...oldForm, [evt.target.name]: evt.target.value }))
    }

    const handleOnSubmit = async (evt) => {
        evt.preventDefault()
        setIsProcessing(true)
        setErrors((err) => ({ ...err, form: null }))

        const { data, error } = await apiClient.loginUser({
            email: form.email,  
            password: form.password,
        })

        if (error) {
            setErrors((err) => ({ ...err, form: error }))
        }

        if (data) {
            setUser(data.user)
            apiClient.setToken(data.token)
            localStorage.setItem("lifetracker_token", data.token)
        }

        //set user data
        const exercises = await apiClient.fetchUserExercises();
            if (exercises) setUserExerciseList(exercises?.data?.activities)
            
            const nutritions = await apiClient.fetchUserNutritions();
            if (nutritions) setUserNutritionList(nutritions?.data?.activities)

            const sleeps = await apiClient.fetchUserSleeps();
            if (sleeps) setUserSleepList(sleeps?.data?.activities)

        setIsProcessing(false)
    }

    return {
        isProcessing,
        errors,
        form,
        handleTextOnChange,
        handleOnSubmit,
    }
} 