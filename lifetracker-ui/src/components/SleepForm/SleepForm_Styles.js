import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    activityDetailContainer: {
        padding: "0",
        height: "100vh",
        backgroundColor: "#2C4147",
    },
    header: {
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
        fontSize: "31px",
        textAlign: "center",
        color: "white",

    },
    form: {
        marginTop: "30px",
    },
    startTime: {
        color: "white"
    },
    submit: {
    margin: theme.spacing(3, 0, 2),
    },
}))

export default useStyles;