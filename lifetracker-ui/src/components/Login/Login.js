import "./Login.css"

import { Container, Typography, Grid, Button, FormControlLabel, TextField, CssBaseline, Checkbox } from "@material-ui/core"
import { Link } from "@material-ui/core"
import { useLoginForm } from "hooks/useLoginForm"
import useStyles from './Login_Styles'

function Login ({ user, setUser }) {

    const { isProcessing, errors, form, handleOnSubmit, handleTextOnChange} = useLoginForm({ user, setUser })

    const classes = useStyles()
    return (
        <div className="Login">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>

                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>

                    <form className={classes.form} onSubmit={handleOnSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={handleTextOnChange}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={handleTextOnChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
    </Container>
        </div>
    )
}

export default Login;