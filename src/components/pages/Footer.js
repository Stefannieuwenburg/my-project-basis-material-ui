import { Typography, Link } from "@material-ui/core";
import { Container } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";

const Footer = (props) => {
    return (
        <Container>
            <CssBaseline />
            <Typography
                variant="body2"
                color="primary"
                align="center"
                {...props}
            >
                {"Copyright © "}
                <Link color="inherit" href="https://">
                    Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </Container>
    );
};
export default Footer;
