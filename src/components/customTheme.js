
import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const customTheme = createTheme({
    palette: {
        primary: {
            light: "#112233",
            main: "#4e3459",
            dark: "#778899",
            contrastText: "#fff",
        },
        secondary: {
            light: "#f0e6e6",
            main: "#c93434",
            dark: "#3c3c3c",
            contrastText: "#000",
        },
    },
    typography: {
        fontFamily: "monospace",
        body2: {
            fontFamily: "monospace",
            fontSize: "1.1rem",
        },
    },
    shape: {
        borderRadius: 30,
    },
    spacing: 8,
    overrides: {
        MuiFilledInput: {
            root: {
                backgroundColor: "green",
            },
        },
        MuiInputLabel: {
            root: {
                backgroundColor: "yellow",
            },
        },
        MuiTextField: {
            root: {},
        },
        MuiButton: {
            root: {
                textTransform: "none",
                padding: "10px",
            },
            fullWidth: {
                maxWidth: "100px",
            },
        },
    },
    props: {
        MuiButton: {
            disableRipple: true,
            variant: "contained",
            color: "primary",
        },
        MuiCheckbox: {
            disableRipple: true,
        },
        MuiTextField: {
            variant: "filled",
            InputLabelProps: {
                shrink: true,
            },
        },
        MuiPaper: {
            elevation: 12,
        },
        MuiCard: {
            elevation: 12,
        },
    },
});
export default customTheme;
