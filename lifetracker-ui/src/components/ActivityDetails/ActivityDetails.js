import "./ActivityDetails.css"

import  { Header } from "components"
import { CssBaseline, Container, Grid, Typography, Button } from "@material-ui/core"
import { Feed } from "components"
import { Link } from "react-router-dom"
import useStyles from "./ActivityDetails_Styles"


function ActivityDetails ({ type, activityList }) {

    type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()

    const classes = useStyles()
    return (
        <div className="ActivityDetails">
            <CssBaseline />
            <Container className={classes.activityDetailContainer} maxWidth="xl">
                <Grid container justify='center'>
                    <Header type={type} />
                    <Grid item xs={12}>
                        <Container pt={8} maxWidth="md">
                            <Grid container justify='center'>
                                <Grid item xs={6}>
                                    <Typography className={classes.header} variant='h4'>Overview</Typography>
                                </Grid>
                                <Grid className={classes.addActivityBtn} item xs={6}>
                                    <Button variant='outlined'>
                                        <Link to="./create">
                                            <Typography className={classes.addBtnText}>Add {type}</Typography>
                                        </Link>
                                    </Button>
                                </Grid>
                                <Grid className={classes.feedGridItem} item>
                                    <Feed type={type} activityList={activityList} />
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ActivityDetails;