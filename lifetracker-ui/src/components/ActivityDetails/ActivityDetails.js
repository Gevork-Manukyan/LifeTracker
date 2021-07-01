import "./ActivityDetails.css"

import { CssBaseline, Container, Grid, Typography, Button } from "@material-ui/core"
import { Feed } from "components"
import useStyles from "./ActivityDetails_Styles"

function ActivityDetails (props) {

    const type = props.type.charAt(0).toUpperCase() + props.type.slice(1).toLowerCase()

    const classes = useStyles()
    return (
        <div className="ActivityDetails">
            <CssBaseline />
            <Container>
                <Grid container justify='center'>
                    <Grid item xs={12}>
                        <Typography className={classes.title} variant="h3">{type}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={classes.header}>Overview</Typography>
                    </Grid>
                    <Grid className={classes.addActivityBtn} item xs={6}>
                        <Button>Add {type}</Button>
                    </Grid>
                    <Grid item>
                        <Feed type={type} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ActivityDetails;