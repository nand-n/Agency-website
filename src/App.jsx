import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Service from "./Components/Service";
import About from "./Components/About";
import Products from "./Components/Products";
import Blog from "./Components/Blog";
import Newsleter from "./Components/Newsleter";
import Footerr from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Products />
      <Blog />
      <Newsleter />
      <Footerr />
    </>
  );
}

export default App;
