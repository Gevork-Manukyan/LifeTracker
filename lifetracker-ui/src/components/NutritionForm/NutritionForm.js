import useStyles from "./NutritionForm_Style";

import { CssBaseline, Container, Grid, Typography, TextField, Button } from "@material-ui/core"
import { Header } from "components"
import { useNutritionForm } from "hooks/useNutritionForm"

function NutritionForm () {

    const { foodName, quantity, calories, handleTextOnChange } = useNutritionForm()

    const classes = useStyles()
    return (
        <div className="NutritionForm">
            <CssBaseline />
            <Container className={classes.activityDetailContainer} maxWidth="xl">
                <Grid container justify='center'>
                    <Header type="nutrition" />
                    <Grid item>

                        <Typography className={classes.header} variant='h4'>
                            Record Nutrition
                        </Typography>

                        <form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>

                                    <TextField
                                        className={classes.foodName}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="food_name"
                                        label="Food Name"
                                        name="food_name"
                                        value={foodName}
                                        onChange={handleTextOnChange}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        className={classes.quantity}
                                        name="quantity"
                                        variant="outlined"
                                        type="number"
                                        required
                                        fullWidth
                                        id="quantity"
                                        label="Quantity"
                                        value={quantity}
                                        onChange={handleTextOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        className={classes.calories}
                                        name="calories"
                                        variant="outlined"
                                        type="number"
                                        required
                                        fullWidth
                                        id="calories"
                                        label="Calories"
                                        value={calories}
                                        onChange={handleTextOnChange}
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Save
                            </Button>

                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default NutritionForm;