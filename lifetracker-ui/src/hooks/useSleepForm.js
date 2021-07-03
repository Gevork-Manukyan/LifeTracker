import apiClient from "services/apiClient"
import moment from "moment"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useSleepForm = ({ setUserSleepList }) => {

    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [hours, setHours] = useState(null)

    const handleDateOnChange = (evt) => {
        if (evt.target.name.toLowerCase() === "start_time")
            setStart(evt.target.value)
        else 
            setEnd(evt.target.value)

    }

    const handleSaveBtnOnClick = async (evt) => {
        evt.preventDefault()
        setIsProcessing(true)

        const [startDate, startTime] = start.split("T")
        const [endDate, endTime] = end.split("T")

        setHours( moment(new Date(end)).diff(moment(new Date(start)), "hours", false) )

        await apiClient.createNewSleep({
            newSleep: {
                startDate,
                endDate,
                startTime,
                endTime,
                hours
            }
        })

        const result = await apiClient.fetchUserSleeps()
        const newList = result.data.activities
        setUserSleepList(newList)

        setIsProcessing(false)
        navigate("/sleep")
    }

    return {
        isProcessing,
        start,
        end,
        hours,
        handleDateOnChange,
        handleSaveBtnOnClick,
    }
}