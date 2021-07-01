import "./ExerciseForm.css"

import { useState } from "react"
import { Header } from "components"
import useStyles from "./ExerciseForm_Styles"
import { CssBaseline, Container, Grid, Typography, TextField, Button } from "@material-ui/core"


function ExerciseForm () {

    const [exerciseName, setExerciseName] = useState("")
    const [duration, setDuration] = useState()
    const [intensity, setIntensity] = useState()

    const handleTextOnChange = (evt) => {
        const name = evt.target.name.toLowerCase()

        if (name === "exercise_name")
            setExerciseName(evt.target.value)
        else if (name === "duration")
            if (evt.target.value >= 0)
                setDuration(evt.target.value)
        else if (name === "intensity") 
            if (evt.target.value >= 0 && evt.target.value <= 10)
                setIntensity(evt.target.value) 
    }


    const classes = useStyles()
    return (
        <div className="ExerciseForm">
            <CssBaseline />
            <Container className={classes.activityDetailContainer} maxWidth="xl">
                <Grid container justify='center'>
                    <Header type="exercise" />
                    <Grid item>

                        <Typography className={classes.header} variant='h4'>
                            Add Exercise
                        </Typography>

                        <form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>

                                    <TextField
                                        className={classes.exerciseName}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="exercise_name"
                                        label="Exercise Name"
                                        name="exercise_name"
                                        value={exerciseName}
                                        onChange={handleTextOnChange}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        className={classes.duration}
                                        name="duration"
                                        variant="outlined"
                                        type="number"
                                        required
                                        fullWidth
                                        id="duration"
                                        label="Duration"
                                        placeholder="Minutes"
                                        value={duration}
                                        onChange={handleTextOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        className={classes.intensity}
                                        name="intensity"
                                        variant="outlined"
                                        type="number"
                                        required
                                        fullWidth
                                        id="intensity"
                                        label="Intensity"
                                        placeholder="0-10"
                                        value={intensity}
                                        onChange={handleTextOnChange}
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>

                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ExerciseForm;