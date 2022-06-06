
//voorbeeld Custom button
import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      light: "#112233",
      main: "#445566",
      dark: "#778899",
      contrastText: "#fff"
    },
    secondary: {
      light: "#f0e6e6",
      main: "#c93434",
      dark: "#3c3c3c",
      contrastText: "#000"
    }
  }
});

export default function BasicButtons() {
  return (
    <ThemeProvider theme={customTheme}>
      <Button variant="contained">Contained</Button>
    </ThemeProvider>
  );
}

