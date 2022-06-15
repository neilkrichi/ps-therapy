import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Contact from './Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about"element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
