import apiClient from "services/apiClient"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const useExerciseForm = ({ setUserExerciseList }) => {

    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [exerciseName, setExerciseName] = useState("")
    const [duration, setDuration] = useState()
    const [intensity, setIntensity] = useState()

    const handleTextOnChange = (evt) => {
        const name = evt.target.name.toLowerCase()

        if (name === "exercise_name") {
            setExerciseName(evt.target.value)
        }
        else if (name === "duration") {
            if (evt.target.value >= 0)
                setDuration(evt.target.value)
        }
        else if (name === "intensity") {
            if (evt.target.value >= 0 && evt.target.value <= 10) {
                setIntensity(evt.target.value) 
            }
        }
    }

    const handleSaveBtnOnClick = async (evt) => {
        evt.preventDefault()
        setIsProcessing(true)

        await apiClient.createNewExercise({
            newExercise: {
                name: exerciseName,
                duration,
                intensity    
            }
        })

        const result =  await apiClient.fetchUserExercises()
        const newList = result.data.activities
        setUserExerciseList(newList)

        setIsProcessing(false)
        navigate("/exercise")
    }

    return {
        exerciseName,
        duration,
        intensity,
        isProcessing,
        handleTextOnChange,
        handleSaveBtnOnClick
    }
}