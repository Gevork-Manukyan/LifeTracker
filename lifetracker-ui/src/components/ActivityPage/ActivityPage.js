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
                        <Grid container className={classes.activityFeedBody} spacing={2}>
                            <Grid item>
                                <Button className={classes.addExerciseBtn} variant='outlined'>
                                    <Link to="/exercise/create">
                                        <Typography>Add Exercise</Typography>
                                    </Link>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.addNutritionBtn} variant='outlined'>
                                    <Link to="/nutrition/create">
                                        <Typography>Record Nutrition</Typography>
                                    </Link>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.addSleepBtn} variant='outlined'>
                                    <Link to="/sleep/create">
                                        <Typography>Log Sleep</Typography>
                                    </Link>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={3}>
                            <Grid item>
                                <Card className={classes.totalExerciseMinCard}>
                                    <CardHeader 
                                        title={
                                            <Typography className={classes.totalExerciseMin}>Total Exercise Minutes</Typography>
                                        }
                                    />
                                    <CardContent>
                                        <Typography className={classes.totalExerciseMinValue}>4</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.avgDailyCaloriesCard}>
                                    <CardHeader 
                                        title={
                                            <Typography className={classes.avgDailyCalories}>Avg Daily Calories</Typography>
                                        }
                                    />
                                    <CardContent>
                                        <Typography className={classes.avgDailyCaloriesValue}>5.50</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.avgSleepHrsCard}>
                                    <CardHeader 
                                        title={
                                            <Typography className={classes.avgSleepHrs}>Avg Sleep Hours</Typography>
                                        }
                                    />
                                    <CardContent>
                                        <Typography className={classes.avgSleepHrsValue}>198.00</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.moreStats}>More Stats</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container className={classes.moreStatsBody} spacing={3}>
                            <Grid item>
                                <Card className={classes.maxHourlyCaloriesCard}>
                                    <CardHeader 
                                        title={
                                            <Typography className={classes.maxHourlyCalories}>Maximum Hourly Calories</Typography>
                                        }
                                    />
                                    <CardContent>
                                        <Typography className={classes.maxHourlyCaloriesValue}>10</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.avgExerciseIntensityCard}>
                                    <CardHeader 
                                        title={
                                            <Typography className={classes.avgExerciseIntensity}>Avg Exercise Intensity</Typography>
                                        }
                                    />
                                    <CardContent>
                                        <Typography className={classes.avgExerciseIntensityValue}>28.28</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.totalHoursSleptCard}>
                                    <CardHeader 
                                        title={
                                            <Typography className={classes.totalHoursSlept}>Total Hours Slept</Typography>
                                        }
                                    />
                                    <CardContent>
                                        <Typography className={classes.totalHoursSleptValue}>396</Typography>
                                    </CardContent>
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