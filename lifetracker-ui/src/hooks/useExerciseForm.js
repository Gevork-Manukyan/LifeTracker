import apiClient from "services/apiClient"
import { useState } from "react"


export const useExerciseForm = () => {

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
        
        const result = await apiClient.createNewExercise({
            newExercise: {
                name: exerciseName,
                duration,
                intensity    
            }
        })
    }

    return {
        exerciseName,
        duration,
        intensity,
        handleTextOnChange,
        handleSaveBtnOnClick
    }
}