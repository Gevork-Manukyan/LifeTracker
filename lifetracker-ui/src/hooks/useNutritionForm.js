import apiClient from "services/apiClient"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const useNutritionForm = ({ setUserNutritionList }) => {

    const navigate = useNavigate() 
    const [isProcessing, setIsProcessing] = useState(false)
    const [foodName, setFoodName] = useState("")
    const [quantity, setQuantity] = useState()
    const [calories, setCalories] = useState()


    const handleTextOnChange = (evt) => {
        const name = evt.target.name.toLowerCase()

        if (name === "food_name") {
            setFoodName(evt.target.value)
        }
        else if (name === "quantity") {
            if (evt.target.value >= 0)
                setQuantity(evt.target.value)
        }
        else if (name === "calories") {
            if (evt.target.value >= 0) {
                setCalories(evt.target.value) 
            }
        }
    }

    const handleSaveBtnOnClick = async (evt) => {
        evt.preventDefault()
        setIsProcessing(true)

        await apiClient.createNewNutrition({
            newNutrition: {
                name: foodName,
                calories,
                quantity
            }
        })

        const result = await apiClient.fetchUserNutritions()
        // const newList = result.data.activities
        // setUserNutritionList(newList)

        setIsProcessing(false)
        navigate("/nutrition")
    }

    return {
        foodName,
        quantity,
        calories,
        isProcessing,
        handleTextOnChange,
        handleSaveBtnOnClick,
    }
}