import { useState } from "react"

export const useNutritionForm = () => {

    const [foodName, setFoodName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [calories, setCalories] = useState(0)


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

    return {
        foodName,
        quantity,
        calories,
        handleTextOnChange
    }
}