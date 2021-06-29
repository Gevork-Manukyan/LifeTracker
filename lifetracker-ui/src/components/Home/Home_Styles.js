import { makeStyles } from "@material-ui/core";
import { border } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    heroImage: {
        borderRadius: "10px",
    },
    heroImageContainer: {
        backgroundColor: "transparent",
        borderRadius: "15px"
    },
    subImages: {
        textAlign: 'center',
    }
}))

export default useStyles;