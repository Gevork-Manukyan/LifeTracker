import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    activityPageContainer: {
        paddingTop: "50px",
        height: "100vh"
    },
    activityFeedHeader: {
        fontSize: "42px",
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
        marginBottom: "35px",
        color: "white"
    },
    activityFeedBtns: {
        
    },
    activityFeedBody: {

    },
    feedGrid: {
        padding: "16px 32px",
    },
    addExerciseBtn: {
        background: "#2CC2E2",
    },
    addExerciseText: {
        color: "white"
    },
    addNutritionBtn: {
        background: "#E2632C",
    },
    addSleepBtn: {
        background: "#712CE2",
    },
    totalExerciseMinCard: {
        background: "linear-gradient(240.98deg, #0DD239 15.62%, #2CC2E2 100%)",
        height: "220px",
        width: "360px",
    },
    avgDailyCaloriesCard: {
        background: "linear-gradient(244.73deg, #E2AF2C 3.26%, #E2632C 78.94%)",
        height: "220px",
        width: "360px",
    },
    avgSleepHrsCard: {
        background: "linear-gradient(245.5deg, #2C3FE2 4.62%, #712CE2 82.85%)",
        height: "220px",
        width: "360px",
    },
    feedCardTitle: {
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
        fontSize: "20px",
        color: "white",
        marginTop: "15px",
    },
    feedCardValue: {
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
        fontSize: "60px",
        color: "white"
    },
    moreStats: {
        marginTop: "35px",
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
        fontSize: "30px",
        color: "white",
    },
    moreStatsBody: {
        marginTop: "35px",
    },
    avgExerciseIntensityCard: {
        background: "#0DD239",
        height: "110px", 
        width: "360px",
    },
    maxHourlyCaloriesCard: {
        background: "#E2AF2C",
        height: "110px", 
        width: "360px",
    },
    totalHoursSleptCard: {
        background: "#2C3FE2",
        height: "110px", 
        width: "360px",
    },
    statsCardGridContainer: {
        padding: "16px 32px",
    },
    statsCardTitle: {
        fontSize: "20px",
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
    },
    statsCardValue: {
        fontSize: "24px",
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
        paddingTop: "10px",
    },
    
}))

export default useStyles;