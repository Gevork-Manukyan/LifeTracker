import { useEffect, useState } from "react";

export const useActivityPage = ({ userExerciseList, userNutritionList, userSleepList }) => {
    const [totalMinutes, setTotalMinutes] = useState(0)
    const [avgDailyCalories, setAvgDailyCalories] = useState(0)
    const [avgSleepHours, setAvgSleepHours] = useState(0)
    const [avgExerciseIntensity, setAvgExerciseIntensity] = useState(0)
    const [maxHourlyCalories, setMaxHourlyCalories] = useState(0)
    const [totalHoursSlept, setTotalHoursSlept] = useState(0)


    useEffect(() => {

        const updateDetails = () => {
            setTotalMinutes(() => {
                let sum = 0
                userExerciseList.forEach((element) => {
                    sum += element.duration
                })

                return sum
            })
        }

        updateDetails()

    }, [userExerciseList])

    useEffect(() => {

        const updateDetails = () => {
            setAvgDailyCalories(() => {
                let sum = 0
                userNutritionList.forEach((element) => {
                    sum += element.calories
                })

                return ( userNutritionList.length > 0 ? sum / userNutritionList.length : 0)
            })
        }

        updateDetails()

    }, [userNutritionList])

    useEffect(() => {

        const updateDetails = () => {
            setAvgSleepHours(() => {
                let sum = 0
                userSleepList.forEach((element) => {
                    sum += element.hours
                })

                return ( userSleepList.length > 0 ? sum / userSleepList.length : 0)
            })
        }

        updateDetails()

    }, [userSleepList])

    useEffect(() => {

        const updateDetails = () => {
            setAvgExerciseIntensity(() => {
                let sum = 0
                userExerciseList.forEach((element) => {
                    sum += element.intensity
                })

                return ( userExerciseList.length > 0 ? sum / userExerciseList.length : 0)
            })
        }

        updateDetails()

    }, [userExerciseList])

    useEffect(() => {

        const updateDetails = () => {
            setMaxHourlyCalories(() => {
                let max = 0
                userNutritionList.forEach((element) => {
                    if (element.calories > max)
                        max = element.calories
                })

                return max
            })
        }

        updateDetails()

    }, [userNutritionList])

    useEffect(() => {

        const updateDetails = () => {
            setTotalHoursSlept(() => {
                let sum = 0
                userSleepList.forEach((element) => {
                    sum += element.hours
                })

                return sum
            })
        }

        updateDetails()

    }, [userSleepList])
    

    return {
        totalMinutes,
        avgDailyCalories,
        avgSleepHours,
        avgExerciseIntensity,
        maxHourlyCalories,
        totalHoursSlept,
        setTotalMinutes,
    }
}