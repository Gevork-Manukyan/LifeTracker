import "./ActivityPage.css"

import { CssBaseline, Typography, Container, Grid, Paper, Box, Button, Card, CardHeader, CardContent } from "@material-ui/core"
import { Link } from "react-router-dom"
import useStyles from "./ActivityPage_Styles";


function ActivityPage () {



    const classes = useStyles()
    return (
        <div className="ActivityPage">
            <CssBaseline />
            <Container className={classes.activityPageContainer} >
                <Grid container justify='center'>
                    <Grid item xs={6}>
                        <Typography className={classes.activityFeedHeader} variant='h3'>Activity Feed</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container className={classes.activityFeedBtns} justify="flex-end" spacing={2}>
                            <Grid item>
                                <Button component={ Link } to="/exercise/create" className={classes.addExerciseBtn} variant='contained'>
                                    <Typography classes={classes.addExerciseText}>Add Exercise</Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button component={ Link } to="/nutrition/create" className={classes.addNutritionBtn} variant='contained'>
                                    <Typography>Record Nutrition</Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button component={ Link } to="/sleep/create" className={classes.addSleepBtn} variant='contained'>
                                    <Typography>Log Sleep</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container className={classes.activityFeedBody} spacing={2}>
                            <Grid item>
                                <Card className={classes.totalExerciseMinCard}>
                                    <Grid container className={classes.feedGrid} direction="column" spacing={3}>
                                        <Grid item>
                                            <Typography className={classes.feedCardTitle}>Total Exercise Minutes</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.feedCardValue}>4</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.avgDailyCaloriesCard}>
                                    <Grid container className={classes.feedGrid} direction="column" spacing={3}>
                                        <Grid item>
                                            <Typography className={classes.feedCardTitle}>Avg Daily Calories</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.feedCardValue}>5.50</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.avgSleepHrsCard}>
                                    <Grid container className={classes.feedGrid} direction="column" spacing={3}>
                                        <Grid item>
                                            <Typography className={classes.feedCardTitle}>Avg Sleep Hours</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.feedCardValue}>198.00</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.moreStats}>More Stats</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container className={classes.moreStatsBody} spacing={2}>
                            <Grid item>
                                <Card className={classes.avgExerciseIntensityCard}>
                                    <Grid container className={classes.statsCardGridContainer} direction="column">
                                        <Grid item>
                                            <Typography className={classes.statsCardTitle}>Avg Exercise Intensity</Typography>
                                        </Grid>
                                        <Grid>
                                            <Typography className={classes.statsCardValue}>28.28</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.maxHourlyCaloriesCard}>
                                    <Grid container className={classes.statsCardGridContainer} direction="column">
                                        <Grid item>
                                            <Typography className={classes.statsCardTitle}>Maximum Hourly Calories</Typography>
                                        </Grid>
                                        <Grid>
                                            <Typography className={classes.statsCardValue}>10</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.totalHoursSleptCard}>
                                    <Grid container className={classes.statsCardGridContainer} direction="column">
                                        <Grid item>
                                            <Typography className={classes.statsCardTitle}>Total Hours Slept</Typography>
                                        </Grid>
                                        <Grid>
                                            <Typography className={classes.statsCardValue}>396</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ActivityPage;