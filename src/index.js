import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-ui/core";
import customTheme from "./components/customTheme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={customTheme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
