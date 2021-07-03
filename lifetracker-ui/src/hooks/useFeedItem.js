import clsx from "clsx"
import { Typography, Grid, Avatar, Card, CardHeader, CardContent } from "@material-ui/core"
import useStyles from "../components/FeedItem/FeedItem_Styles"



export const useFeedItem = (type, newItem) => {

    const classes = useStyles() 

    const header = () => {
        return (
            <CardHeader 
                    className={classes.cardHeader}
                    avatar={type === "sleep" ?
                        null
                        :
                        <Avatar className={classes.avatar}>
                                <Typography className={classes.avatarLetter}>{newItem.name.charAt(0)}</Typography>
                        </Avatar>
                    }
                    disableTypography={false}
                    title={
                        <Typography className={clsx(classes.cardTitle, type === "sleep" ? classes.sleepTitle : null )}>
                            {type === "sleep" ? 
                                newItem.start_date.split("T")[0]
                                :
                                newItem.name
                            }
                        </Typography>
                    }
                    subheader={
                        <Typography className={classes.cardSubtitle}>
                            {type === "sleep" ?
                                "TO " + newItem.end_date.split("T")[0]
                                :
                                "07/01/2021"
                            }
                        </Typography>
                    }
                />
        )
    }

    const makeExerciseItem = () => {
        return (
            <Card className={classes.exerciseCard}>
                {header()}
                <CardContent className={classes.cardContent}>
                    <Grid className={classes.feedItemGrid} container>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>Duration</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textalign="center" >{newItem.duration}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>Intensity</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textalign="center" >{newItem.intensity}/10</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }

    const makeNutritionItem = () => {
        return ( 
            <Card className={classes.nutritionCard}>
                {header()}
                <CardContent className={classes.cardContent}>
                    <Grid className={classes.feedItemGrid} container>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>Calories</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textalign="center" >{newItem.calories}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>Quantity</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textalign="center">{newItem.quantity}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }

    const makeSleepItem = () => {
        return ( 
            <Card className={classes.sleepCard}>
                {header()}
                <CardContent className={classes.cardContent}>
                    <Grid className={classes.feedItemGrid} justify='center' container>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>Start Time</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textalign="center" >{newItem.start_time.substring(0,5)}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>End Time</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textalign="center">{newItem.end_time.substring(0,5)}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.cardContentFooter}>- {newItem.hours} Hours -</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }


    return {
        makeExerciseItem,
        makeNutritionItem,
        makeSleepItem,
    }
}