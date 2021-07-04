import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        fontSize: "42px",
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
        backgroundColor: '#3D4a46',
        color: "white",
        padding: "40px 0",
        marginBottom: "50px"
    },
    exercise: {
        backgroundColor: '#0DD239',

    },
    nutrition: {
        backgroundColor: '#E2632C',

    }, 
    sleep: {
        backgroundColor: '#712CE2',

    }
}))

export default useStyles;