import useStyles from "./Header_Styels"
import { Container, Grid, Typography } from "@material-ui/core"

function Header ({ type }) {

    type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
    const classes = useStyles()
    return (

        <Grid item xs={12}>
            <Typography className={classes.title} variant="h3">{type}</Typography>
        </Grid>
    )
}

export default Header;