import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    exerciseCard: {
        width: "358px",
        height: "252px",
        background: "#2CE2A1",
        borderRadius: "30px",
    },
    cardHeader: {
        paddingLeft: "35px",
        paddingTop: "27px"
    },
    avatar: {
        width: "68px",
        height: "68px",
        marginRight: "6px",

        color: "#FFFFFF",
        backgroundColor: "#2C739A",
    },
    avatarLetter: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "36px",
        lineHeight: "42px"
    },
    cardTitle: {
        fontFamily: "Krona One",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "36px",
        color: "#FFF8F8",
        lineHeight: "45px",

        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    cardSubtitle: {
        paddingLeft: "3px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "16px",
        textTransform: "uppercase",

        color: "#000000",
    },
    cardContent: {
        marginTop: "35px",
    },
    columnItem: {
        textAlign: "center"
    },
    columnTitle: {
        marginBottom: "8px",
        fontFamily: "Krona One",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",

        // textDecoration: "underline",
        textTransform: "uppercase",

        color: "#f5f5f5",

        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    columnValue: {
        fontFamily: "Krona One",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        lineHeight: "30px",

        textTransform: "uppercase",

        color: "#000000",
    }
}))

export default useStyles;