import "./Feed.css"

import { CssBaseline, Container, Grid, Button, Typography } from "@material-ui/core"
import { FeedItem } from "components"
import useStyles from "./Feed_Styles"


function Feed (props) {
    
    const classes = useStyles()

    return (
        <div className="Feed">
            <CssBaseline />
            <Container className="feedContainer" maxWidth='sm'>
                <Grid container>
                    <FeedItem />
                </Grid>
            </Container>
        </div>
    )
} 

export default Feed;