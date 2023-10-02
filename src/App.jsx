import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Service from "./Components/Service";
import About from "./Components/About";
import Products from "./Components/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Products />
    </>
  );
}

export default App;
