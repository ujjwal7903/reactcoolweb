import React from "react";
import Home from "./Home";
import Resource from "./Resource";
import Blog from "./Blog";
import Member from "./Member";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resource" component={Resource} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/member" component={Member} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </>
    );
  };
  
  export default App;