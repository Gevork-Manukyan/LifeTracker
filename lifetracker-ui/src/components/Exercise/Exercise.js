import "./Exercise.css"

import { CssBaseline, Container, Grid, Typography, Button } from "@material-ui/core"
import { Feed } from "components"
import useStyles from "./Exercise_Styels"

function Exercise () {

    const classes = useStyles()

    return (
        <div className="Exercise">
            <CssBaseline />
            <Container>
                <Grid container justify='center'>
                    <Grid item xs={12}>
                        <Typography className={classes.title} variant="h3">Exercise</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={classes.header}>Overview</Typography>
                    </Grid>
                    <Grid className={classes.addExerciseBtn} item xs={6}>
                        <Button>Add Exercise</Button>
                    </Grid>
                    <Grid item>
                        <Feed />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Exercise;