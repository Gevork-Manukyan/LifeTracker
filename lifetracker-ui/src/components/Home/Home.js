import "./Home.css"

import { Link } from "react-router-dom";
import { CssBaseline, Typography, Container, Grid, Paper, Box } from "@material-ui/core"
import Image from "material-ui-image"
import useStyles from "./Home_Styles";


function Home () {
    const classes = useStyles()

    return (
        <main>
            <div className="Home">
                <CssBaseline />
                <Container className="container" maxWidth='md'>
                    <Grid container spacing={5} alignItems='center'>
                        <Grid item xs={6}>
                            <Paper className={classes.paper} elevation={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className="heroImage" elevation={15}>
                                <Image className={classes.heroImage} src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" aspectRatio="1.77777" />
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="/exercise">
                                <Paper elevation={4} className={classes.subImages}>
                                    <Box className="subImages">
                                            <Typography>Fitness</Typography>
                                        <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                                    </Box>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="/nutrition">
                                <Paper elevation={4} className={classes.subImages} >
                                    <Box className="subImages">
                                            <Typography>Food</Typography>
                                        <Image src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80" />
                                    </Box>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="/sleep">
                                <Paper elevation={4} className={classes.subImages}>
                                    <Box className="subImages">
                                            <Typography>Rest</Typography>
                                        <Image src="https://images.unsplash.com/photo-1495197359483-d092478c170a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80" />
                                    </Box>
                                </Paper>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </main>
    )
}

export default Home;