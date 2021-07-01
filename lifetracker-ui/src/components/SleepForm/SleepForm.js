import useStyles from "./SleepForm_Styles";

import { CssBaseline, Grid, Typography, Container, TextField, Button } from "@material-ui/core"
import { Header } from "components"
import { useSleepForm } from "hooks/useSleepForm"

function SleepForm () {

    const { startTime, endTime, handleDateOnChange } = useSleepForm()

    const classes = useStyles()
    return (
        <div className="SleepForm">
            <CssBaseline />
            <Container className={classes.activityDetailContainer} maxWidth="xl">
                <Grid container justify='center'>
                    <Header type="sleep" />
                    <Grid item>

                        <Typography className={classes.header} variant='h4'>
                            Record Sleep
                        </Typography>

                        <form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>

                                    <TextField
                                        className={classes.startTime}
                                        variant="outlined"
                                        type="datetime-local"
                                        required
                                        fullWidth
                                        id="start_time"
                                        label="Start Time"
                                        name="start_time"
                                        value={startTime}
                                        onChange={handleDateOnChange}
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12}>

                                    <TextField
                                        className={classes.endTime}
                                        variant="outlined"
                                        type="datetime-local"
                                        required
                                        fullWidth
                                        id="end_time"
                                        label="End Time"
                                        name="end_time"
                                        InputLabelProps={{
                                            shrink: true,
                                          }}
                                        value={endTime}
                                        onChange={handleDateOnChange}
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

export default SleepForm;