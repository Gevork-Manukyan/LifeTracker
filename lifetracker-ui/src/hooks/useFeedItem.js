import clsx from "clsx"
import { Typography, Grid, Avatar, Card, CardHeader, CardContent } from "@material-ui/core"
import useStyles from "../components/FeedItem/FeedItem_Styles"



export const useFeedItem = (type) => {

    const classes = useStyles()

    const header = () => {
        return (
            <CardHeader 
                    className={classes.cardHeader}
                    avatar={
                        <Avatar className={classes.avatar}>
                            <Typography className={classes.avatarLetter}>S</Typography>
                        </Avatar>
                    }
                    disableTypography={false}
                    title={
                        <Typography className={clsx(classes.cardTitle, type === "sleep" ? classes.sleepTitle : null )}>
                            Soccer
                        </Typography>
                    }
                    subheader={
                        <Typography className={classes.cardSubtitle}>
                            07/01/2001
                        </Typography>
                    }
                />
        )
    }

    const makeExerciseItem = () => {
        return (
            <Card className={classes.exerciseCard}>
                {/* <CardHeader 
                    className={classes.cardHeader}
                    avatar={
                        <Avatar className={classes.avatar}>
                            <Typography className={classes.avatarLetter}>S</Typography>
                        </Avatar>
                    }
                    disableTypography={false}
                    title={
                        <Typography className={classes.cardTitle}>
                            Soccer
                        </Typography>
                    }
                    subheader={
                        <Typography className={classes.cardSubtitle}>
                            07/01/2001
                        </Typography>
                    }
                /> */}
                {header()}
                <CardContent className={classes.cardContent}>
                    <Grid className={classes.feedItemGrid} container>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>Duration</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textAlign="center" >30</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>Intensity</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textAlign="center" >1/10</Typography>
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
                {/* <CardHeader 
                    className={classes.cardHeader}
                    avatar={
                        <Avatar className={classes.avatar}>
                            <Typography className={classes.avatarLetter}>S</Typography>
                        </Avatar>
                    }
                    disableTypography={false}
                    title={
                        <Typography className={classes.cardTitle}>
                            Taco
                        </Typography>
                    }
                    subheader={
                        <Typography className={classes.cardSubtitle}>
                            07/01/2001
                        </Typography>
                    }
                /> */}

                {header()}
                <CardContent className={classes.cardContent}>
                    <Grid className={classes.feedItemGrid} container>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>Calories</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textAlign="center" >10</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>Quantity</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textAlign="center">2</Typography>
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
                {/* <CardHeader 
                    className={classes.cardHeader}
                    avatar={
                        <Avatar className={classes.avatar}>
                            <Typography className={classes.avatarLetter}>S</Typography>
                        </Avatar>
                    }
                    disableTypography={false}
                    title={
                        <Typography className={clsx(classes.cardTitle, classes.sleepTitle)}>
                            Jun 24, 2021
                        </Typography>
                    }
                    subheader={
                        <Typography className={classes.cardSubtitle}>
                            to Jun 25, 2021
                        </Typography>
                    }
                /> */}

                {header()}
                <CardContent className={classes.cardContent}>
                    <Grid className={classes.feedItemGrid} justify='center' container>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>Start Time</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textAlign="center" >3:33 AM</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container alignContent="center" direction="column">
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnTitle}>End Time</Typography>
                                </Grid>
                                <Grid item className={classes.columnItem}>
                                    <Typography className={classes.columnValue} textAlign="center" >8:15 PM</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.cardContentFooter}>- 12 Hours -</Typography>
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