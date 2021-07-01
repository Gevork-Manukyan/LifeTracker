import "./FeedItem.css"

import { CssBaseline, Container, Box, Typography, Grid, Avatar, Card, CardHeader, CardContent } from "@material-ui/core"
import useStyles from "./FeedItem_Styles"


function FeedItem (props) {

    const makeExerciseItem = () => {
        return (
            <Card className={classes.exerciseCard}>
                <CardHeader 
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
                            Today at 8:08 PM
                        </Typography>
                    }
                />

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
        
    }

    const makeSleepItem = () => {
        
    }


    const classes = useStyles()
    return (
        <Grid item>
            {makeExerciseItem()}
        </Grid>
    )
}

export default FeedItem;