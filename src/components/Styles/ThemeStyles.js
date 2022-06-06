import { makeStyles } from "@material-ui/core/styles";

const ThemeStyles = makeStyles({
    button: {
        backgroundColor: "yellow",
        color: "black",
        borderRadius: 20,
        "&:hover": {
            backgroundColor: "olive",
        },
    },
});
export default ThemeStyles
