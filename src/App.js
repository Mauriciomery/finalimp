import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from "./Pages/Menu";
import Fibo from "./Pages/Fibo";
import Facto from "./Pages/Facto";
import APTrian from "./Pages/APTrian";
import APCir from "./Pages/APCir";
import APRect from "./Pages/APRect";

class App extends Component{
  render() {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Menu/>}/>
          <Route exact path="/fibonacci" element={<Fibo/>}/>
          <Route exact path="/factorial" element={<Facto/>}/>
          <Route exact path="/triangulo" element={<APTrian/>}/>
          <Route exact path="/circulo" element={<APCir/>}/>
          <Route exact path="/rectangulo" element={<APRect/>}/>
        </Routes>
      </Router>
    )
  }
}

export default App;
