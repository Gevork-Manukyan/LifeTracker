import "./FeedItem.css"

import { Grid } from "@material-ui/core"
import { useFeedItem } from "hooks/useFeedItem"


function FeedItem (props) {

    const type = props?.type?.toLowerCase()
    const { makeExerciseItem, makeNutritionItem, makeSleepItem } = useFeedItem(type)

    return (
        <Grid item>
            {type === "exercise" ? makeExerciseItem() : (type === "nutrition" ? makeNutritionItem() : makeSleepItem())}
        </Grid>
    )
}

export default FeedItem;