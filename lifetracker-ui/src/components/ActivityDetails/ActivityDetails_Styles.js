import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    activityDetailContainer: {
        padding: "0",
        height: "100vh",
        backgroundColor: "#2C4147",
    },
    header: {
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
        color: "white",
    },
    addActivityBtn: {
        textAlign: 'end',
    },
    addBtnText: {
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
        fontWeight: "700",
        fontSize: "18px"
    },
    feedGridItem: {
        marginTop: "50px"
    },
    exerciseBtn: {
        borderColor: "#2CC2E2",
        color: "#2CC2E2"
    },
    nutritionBtn: {
        borderColor: "#E2632C",
        color: "#E2632C"
    },
    sleepBtn: {
        borderColor: "#4c02fd",
        color: "#4c02fd"
    },
}))

export default useStyles;