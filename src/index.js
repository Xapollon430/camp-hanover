import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import App from "./App";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location/Location";
import PressRelease from "./components/PressRelease/PressRelease";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route exact path="/about-us" render={() => <AboutUs />} />
        <Route exact path="/location" render={() => <Location />} />
        <Route exact path="/gallery" render={() => <Gallery />} />
        <Route exact path="/press-release" render={() => <PressRelease />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
