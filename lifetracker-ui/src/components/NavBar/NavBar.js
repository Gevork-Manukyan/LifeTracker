import "./NavBar.css"
import codepath_logo from "../../assets/codepath_logo.png"

import { Link, NavLink } from "react-router-dom"
import { CssBaseline, Typography, AppBar, Toolbar, Container, Box, Button } from "@material-ui/core"
import useStyles from "./NavBar_Styles"



function NavBar () {
    const classes = useStyles()

    return (
        <div className="NavBar">
            <CssBaseline />
                <AppBar className={classes.appBar} position="relative">
                    <Container maxWidth='md'>
                        <Toolbar className={classes.navBar}>
                            <Link to="/">
                                <img className="logo" src={codepath_logo} alt="codepath logo" />
                            </Link>

                            <Box className={classes.links} >
                                <NavLink to="/">
                                    <Box className={classes.linkItems}>
                                        <Typography variant="h7">Activity</Typography>
                                    </Box>
                                </NavLink>
                                <NavLink to="/exercise">
                                    <Box className={classes.linkItems}>
                                        <Typography variant="h7">Exercise</Typography>
                                    </Box>
                                </NavLink>
                                <NavLink to="/nutrition">
                                    <Box className={classes.linkItems}>
                                        <Typography variant="h7">Nutritional</Typography>
                                    </Box>
                                </NavLink>
                                <NavLink to="/sleep">
                                    <Box className={classes.linkItems}>
                                        <Typography variant="h7">Sleep</Typography>
                                    </Box>
                                </NavLink>
                                
                                <Link to="/login">
                                    <Button className={classes.loginBtn} variant="contained" color="">login</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className={classes.signupBtn} variant="outlined" color="">Sign Up</Button>
                                </Link>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
        </div>
    )
}

export default NavBar;