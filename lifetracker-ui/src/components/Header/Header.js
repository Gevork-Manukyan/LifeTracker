import useStyles from "./Header_Styels"
import { Grid, Typography } from "@material-ui/core"
import clsx from "clsx"


function Header ({ type }) {

    type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
    const classes = useStyles()
    return (

        <Grid item xs={12}>
            <Typography className={clsx(classes.title, type === "Exercise" ? classes.exercise : (type === "Nutrition" ? classes.nutrition: classes.sleep))} variant="h3">{type}</Typography>
        </Grid>
    )
}

export default Header;