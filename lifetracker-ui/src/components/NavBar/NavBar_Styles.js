import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    navBar: {
        margin: "10px 0",
        width: "100%",
        msOverflowX: "auto",
    },
    appBar: {
        width: "100%",
        msOverflowX: "auto",
        // height: "100px",
    },
    links: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        flexGrow: 1
    },
    linkItems: {
        padding: "0 30px",
        paddingTop: "10px"
    },
    loginBtn: {
        marginTop: "3px",
        marginLeft: "20px"
    },
    signupBtn: {
        marginLeft: "10px",
    }
}))

export default useStyles;