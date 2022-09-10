import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
const App = () => {
  return (
    <Router>
      <div className="App-body">
        <Nav />
        {/* Pages*/}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about/*" element={<About />} />
          <Route exact path="services/*" element={<Services />} />
          <Route exact path="blog/*" element={<Blog />} />
          <Route exact path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
