import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    exerciseCard: {
        width: "358px",
        height: "252px",
        // background: "#2CE2A1",
        // background: "linear-gradient(243.64deg, #46E22C 22.3%, #2CC2E2 100%)",
        background: "linear-gradient(240.98deg, #0DD239 15.62%, #2CC2E2 100%)",

        borderRadius: "30px",
    },
    nutritionCard: {
        width: "358px",
        height: "252px",
        // background: "#E2842C",
        // background: "linear-gradient(244.73deg, #E2632C 3.26%, #E2AF2C 76.95%)",
        background: "linear-gradient(244.73deg, #E2AF2C 3.26%, #E2632C 78.94%)",
        borderRadius: "30px",
    },
    sleepCard: {
        width: "358px",
        height: "252px",
        // background: "#2C3FE2",
        // background: "linear-gradient(245.5deg, #2C3FE2 4.62%, #712CE2 99.24%, rgba(44, 63, 226, 0.40625) 99.25%)",
        background: "linear-gradient(245.5deg, #2C3FE2 4.62%, #712CE2 82.85%)",


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
        fontFamily: "Roboto, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "36px",
        lineHeight: "42px"
    },
    cardTitle: {
        fontFamily: "Krona One, Roboto, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "36px",
        color: "#FFF8F8",
        lineHeight: "45px",

        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    sleepTitle: {
        fontSize: "24px"
    },
    cardSubtitle: {
        paddingLeft: "3px",
        fontFamily: "Roboto, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "16px",
        textTransform: "uppercase",

        color: "#000000",
    },
    cardContent: {
        marginTop: "22px",
    },
    columnItem: {
        textAlign: "center"
    },
    columnTitle: {
        marginBottom: "8px",
        fontFamily: "Krona One, Roboto, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",

        textDecoration: "underline",
        textTransform: "uppercase",

        color: "#f5f5f5",

        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    columnValue: {
        fontFamily: "Krona One, Roboto, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        lineHeight: "30px",

        textTransform: "uppercase",

        color: "#000000",
    },
    cardContentFooter: {
        fontFamily: "Krona One, Roboto, sans-serif",
        // fontFamily: "Roboto",
        marginTop: "15px",
    }
}))

export default useStyles;