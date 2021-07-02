import apiClient from "services/apiClient"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const useSignupForm = (/*{ user, setUser }*/) => {

    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        firstName: "",
        lastName: "", 
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    // useEffect(() => {
    //     // if logged in, take to homepage
    //     if (user?.username) {
    //         navigate("/")
    //     }
    // }, [user, navigate])

    const handleTextOnChange = (evt) => {
        if (evt.target.name === "email") {
            if (evt.target.value.indexOf("@") <= 0) {
                setErrors((err) => ({ ...err, email: "Please enter a valid email." }))
            } else {
                setErrors((err) => ({ ...err, email: null }))
            }
        }

        if (evt.target.name === "confirm_password") {
            if (evt.target.value !== form.password) {
                setErrors((err) => ({ ...err, confirmPassword: "Passwords do not match." }))
            } else {
                setErrors((err) => ({ ...err, confirmPassword: null }))
            }
        }

        setForm((oldForm) => ({ ...oldForm, [evt.target.name]: evt.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((err) => ({ ...err, form: null }))

        const { data, error } = await apiClient.signupUser({
            firstName: form.firstName,
            lastName: form.lastName, 
            email: form.email,
            username: form.username,
            password: form.password,
            confirmPassword: form.confirmPassword
        })

        if (error) {
            setErrors((err) => ({ ...err, form: error }))
        }
        // if (data) {
            
        // }
    }

    return {
        isProcessing,
        errors,
        form,
        handleTextOnChange,
        handleOnSubmit,
    }
} 