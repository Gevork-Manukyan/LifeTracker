import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
        backgroundColor: 'lightblue',
        padding: "40px 0",
        marginBottom: "50px"
    },
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