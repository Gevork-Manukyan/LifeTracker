import "./Feed.css"

import { CssBaseline, Container, Grid } from "@material-ui/core"
import { FeedItem } from "components"
import useStyles from "./Feed_Styles"


function Feed ({type, activityList}) {

    const classes = useStyles()
    return (
        <div className="Feed">
            <CssBaseline />
            <Container className="feedContainer" maxWidth='sm'>
                <Grid container spacing={5}>
                    {activityList.map((item, index) => (
                        <FeedItem
                            type={type}
                            key={index}
                            newItem={item}
                        />
                    ))}
                </Grid>
            </Container>
        </div>
    )
} 

export default Feed;