import { Header } from "components"
import useStyles from "./ExerciseForm_Styles"
import { CssBaseline, Container, Grid, Typography, TextField, Button } from "@material-ui/core"
import { useExerciseForm } from "hooks/useExerciseForm"


function ExerciseForm () {


    const { exerciseName, duration, intensity, handleTextOnChange, handleSaveBtnOnClick } = useExerciseForm()

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

                        <form className={classes.form} onSubmit={handleSaveBtnOnClick}>
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
                                Save
                            </Button>

                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ExerciseForm;