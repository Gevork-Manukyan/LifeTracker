import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    title: {
        fontSize: "48px",
        fontWeight: "700",
        paddingBottom: "10px",
        paddingTop: "10px",
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
    },
    subTitle: {
        fontSize: "24px",
        paddingBottom: "10px",
        
    },
    heroImage: {
        borderRadius: "10px",
    },
    heroImageContainer: {
        backgroundColor: "transparent",
        borderRadius: "15px"
    },
    cardTitle: {
        fontSize: "24px",
        fontFamily: "Kanit, Roboto, Cantarell, Helvetica Neue, sans-serif",
    },
    subImages: {
        textAlign: 'center',
    }
}))

export default useStyles;