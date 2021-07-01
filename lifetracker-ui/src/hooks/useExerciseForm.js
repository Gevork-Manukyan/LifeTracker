
import { useState } from "react"

export const useExerciseForm = () => {

    const [exerciseName, setExerciseName] = useState("")
    const [duration, setDuration] = useState(null)
    const [intensity, setIntensity] = useState(null)

    const handleTextOnChange = (evt) => {
        const name = evt.target.name.toLowerCase()

        if (name === "exercise_name") {
            console.log("Exercise")
            setExerciseName(evt.target.value)
        }
        else if (name === "duration") {
            console.log("duration")
            if (evt.target.value >= 0)
                setDuration(evt.target.value)
        }
        else if (name === "intensity") {
            if (evt.target.value >= 0 && evt.target.value <= 10) {
                setIntensity(evt.target.value) 
            }
        }
    }

    return {
        exerciseName,
        duration,
        intensity,
        handleTextOnChange
    }
}