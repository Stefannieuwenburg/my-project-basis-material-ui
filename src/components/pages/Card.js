import React, { useEffect, useState } from "react";
import { Container }  from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@mui/material/CssBaseline";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 280,
    },
});

function App(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const classes = useStyles();

    return (
        <div>
            <Container>
                <CssBaseline />
                <Grid container spacing={6}>
                    {data.map((character) => (
                        <Grid item xs={12} sm={4} key={character.id}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={character.img_url}
                                />
                                <CardContent>
                                    <Typography color="primary" variant="h5">
                                        {character.name}
                                    </Typography>
                                    <Typography
                                        color="primary"
                                        variant="subtitle1"
                                    >
                                        {character.status}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default App;
