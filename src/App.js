// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './about';
import Home from './home';
import Blog from './blog';
import Contact from './contact';
import Mailing from './mailing';
import hamburger from './hamburger2.png';

function App() {
  return (
    <Router>
      <div className="navbar">
        <button type="button" className="navbutton" onClick={toggleMenu}><img src={hamburger} alt="Menu" height="25px"></img></button>
        <div className="navcontent">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/mailing">
          <Mailing />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <hr />
      <div className="card">
        <div className="card-body">
          <div className="ui-bar">
          </div>
          <div className="footerbuttons">
            {/* w3schools stuff */}
            <a href="https://www.youtube.com/channel/UCSSbZRKHS72VuwhjX0-APKg" className="fa fa-youtube" alt="YouTube" target="_blank" rel="noreferrer">&#8205;</a>
            <a href="https://www.instagram.com/rwc_2021/" className="fa fa-instagram" alt="Instagram" target="_blank" rel="noreferrer">&#8205;</a>
            <a href="https://twitter.com/FacultyRwc" className="fa fa-twitter" alt="Twitter" target="_blank" rel="noreferrer">&#8205;</a>
            <a href="https://www.facebook.com/joana.doe.334" className="fa fa-facebook" alt="Facebook" target="_blank" rel="noreferrer">&#8205;</a>
          </div>
          <div className="copyright">
            <h6>Help.RWC@gmail.com </h6>
            <h6>All site content copyright &copy; 2021 RWC | RWC. All rights reserved.</h6></div>
        </div>
      </div>
    </Router>

  );
}

function toggleMenu() {
  const menu = document.querySelector(".navcontent")
  menu.classList.toggle("visible");
}

export default App;
