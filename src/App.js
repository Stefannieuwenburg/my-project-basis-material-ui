import * as React from "react";
import { Route,Routes } from "react-router";
import ResponsiveAppBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog"
import Products from "./components/pages/Products";
import Footer from "./components/pages/Footer"
// import Card from "./components/Card";


const App = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Routes>
                <Route path="Home" element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="Products" element={<Products />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;

