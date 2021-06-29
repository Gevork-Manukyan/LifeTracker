import "./NavBar.css"
import codepath_logo from "../../assets/codepath_logo.png"

import { CssBaseline, Typography, AppBar, Toolbar, Container, Box, Button } from "@material-ui/core"
import useStyles from "./NavBar_Styles"



function NavBar () {
    const classes = useStyles();

    return (
        <div className="NavBar">
            <CssBaseline />
                <AppBar position="relative">
                    <Toolbar className={classes.navBar}>
                        <span>
                            <img className="logo" src={codepath_logo} alt="codepath logo" />
                        </span>

                        <Box className={classes.links} >
                            <Box className={classes.linkItems}><Typography variant="h7">Activity</Typography></Box>
                            <Box className={classes.linkItems}><Typography variant="h7">Exercise</Typography></Box>
                            <Box className={classes.linkItems}><Typography variant="h7">Nutritional</Typography></Box>
                            <Box className={classes.linkItems}><Typography variant="h7">Sleep</Typography></Box>
                            <Button className={classes.loginBtn} variant="contained" color="">login</Button>
                            <Button className={classes.signupBtn} variant="outlined" color="">Sign Up</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
        </div>
    )
}

export default NavBar;