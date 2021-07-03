import "./FeedItem.css"

import { Grid } from "@material-ui/core"
import { useFeedItem } from "hooks/useFeedItem"


function FeedItem ({ type, newItem }) {

    type = type?.toLowerCase()
    const { makeExerciseItem, makeNutritionItem, makeSleepItem } = useFeedItem(type, newItem)
    return (
        <Grid item>
            {type === "exercise" ? makeExerciseItem() : (type === "nutrition" ? makeNutritionItem() : makeSleepItem())}
        </Grid>
    )
}

export default FeedItem;