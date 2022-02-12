import React from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import CommingSoon from "./component/Pages/CommingSoon";
import ElectricalService from "./component/Pages/ElectricalService";
import ElectricalActuator from "./component/Pages/ElectricalActuator";
import SolarSetup from "./component/Pages/SolarSetup";
import HomeAutomation from "./component/Pages/HomeAutomation";
import Carrier from "./component/Carrier";
import Footer from "./component/Footer";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/carrier" component={Carrier} />
          <Route exact path="/mask" component={CommingSoon} />
          <Route exact path="/bike" component={CommingSoon} />
          <Route exact path="/office" component={CommingSoon} />
          <Route exact path="/house" component={CommingSoon} />
          <Route exact path="/car" component={CommingSoon} />
          <Route exact path="/eservice" component={ElectricalActuator} />
          <Route exact path="/eactuator" component={ElectricalService} />
          <Route exact path="/solarsetup" component={SolarSetup} />
          <Route exact path="/power" component={CommingSoon} />
          <Route exact path="/homeautomation" component={HomeAutomation} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
