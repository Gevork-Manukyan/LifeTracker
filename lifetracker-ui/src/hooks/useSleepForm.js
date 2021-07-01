import { useState } from "react";


export const useSleepForm = () => {

    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")

    const handleDateOnChange = (evt) => {
        if (evt.target.name.toLowerCase() === "start_time")
            setStartTime(evt.target.value)
        else 
            setEndTime(evt.target.value)
    }

    return {
        startTime,
        endTime,
        handleDateOnChange
    }
}