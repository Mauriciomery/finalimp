import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from "./Pages/Menu";
import Fibo from "./Pages/Fibo";
import Facto from "./Pages/Facto";

class App extends Component{
  render() {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Menu/>}/>
          <Route exact path="/fibonacci" element={<Fibo/>}/>
          <Route exact path="/factorial" element={<Facto/>}/>
        </Routes>
      </Router>
    )
  }
}

export default App;
