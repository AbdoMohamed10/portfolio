import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <NavBar />
        <Header />
        <AboutMe />
      </div>
      <Experience />
      <Work />
      <Footer />
    </>
  );
};

export default App;
