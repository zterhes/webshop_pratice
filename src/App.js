import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import Menubar from './components/MenuBar'

function App() {
  return (
    <Router>
      <Menubar/>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
