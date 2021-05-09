import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import Menubar from './components/MenuBar'
import Products from './pages/Products'
import About from "./pages/About";
import SingleProductPage from './pages/SingleProductPage'

function App() {
  return (
    <Router>
      <Menubar/>
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/productPage/:productId">
          <SingleProductPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
