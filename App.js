import React from "react";
import "./App.css";

import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./component/pages/NotFound";
import AddUser from "./component/users/AddUser";
import EditeUser from './component/users/EditeUser'
import User from "./component/users/User";
import Myproduct from "./component/pages/Myproduct";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditeUser} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/myproduct" component={Myproduct} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;