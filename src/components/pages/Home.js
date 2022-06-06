import * as React from "react";
import {
    CssBaseline,
    Stack,
    Typography,
    Container,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import Gary2 from "../../components/image/gary2.jpg";
import Gary3 from "../../components/image/gary3.jpg";
import Gary4 from "../../components/image/gary4.jpg";
const theme = createTheme();

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.secondary"
                    gutterBottom
                >
                    Gary Goodspeed blog
                </Typography>
                <Typography
                    variant="p"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    Gary Goodspeed is the son of John Goodspeed, an Infinity
                    Guard captain who died on a mission to close a breach to
                    Final Space when Gary was a child. Shortly after the death
                    of his father, Gary was abandoned by his mother, Sheryl
                    Goodspeed, and forced into a life of crime. Years later, an
                    emotionally stunted adult Gary impersonated an Infinity
                    Guard soldier to impress officer Quinn Ergon, but
                    accidentally destroyed 92 spaceships, and was sentenced to a
                    5-year prison sentence on the Galaxy One, where, on his
                    final year of imprisonment, would meet and befriend a
                    planet-destroying alien named Mooncake, and the Ventrexian
                    bounty hunter Avocato, which subsequently puts him on a
                    life-changing journey to unlock the mystery of Final Space.
                    Serving as the leader of the Team Squad, he is the main
                    protagonist of Final Space.
                </Typography>
                <Stack
                    my={7}
                    spacing={2}
                    direction="row"
                    align="center"
                    justifyContent="center"
                >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="160"
                                src={Gary2}
                                alt="pic"
                            />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Gary Goodspeed
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="160"
                                src={Gary3}
                                alt="pic"
                            />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Gary Goodspeed
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="160"
                                src={Gary4}
                                alt="pic"
                            />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Gary Goodspeed
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}
export default Home;