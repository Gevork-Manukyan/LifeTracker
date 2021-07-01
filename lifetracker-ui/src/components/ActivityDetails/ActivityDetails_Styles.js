import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    activityDetailContainer: {
        padding: "0",
        height: "100vh",
        backgroundColor: "lightgreen",
    },
    header: {
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif"
    },
    addActivityBtn: {
        textAlign: 'end',
    },
    addBtnText: {
        fontFamily: "Roboto, Cantarell, Helvetica Neue, sans-serif"
    },
    feedGridItem: {
        marginTop: "50px"
    },
}))

export default useStyles;