import { makeStyles } from '@material-ui/core/styles'
// import { createMuiTheme, ThemeProvider } from '@material-ui/core'
// import { green, purple } from "@material-ui/core/colors"


// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: purple['500']
//         }, 
//         secondary: {
//             main: green['A400']
//         }
//     }
// })

const useStyles = makeStyles((theme) => ({
    navBar: {
        margin: "10px 0",
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