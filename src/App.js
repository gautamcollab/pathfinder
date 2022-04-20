import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './Components/NavBar';
import BackgroundContainer from './Components/BackgroundContainer'; 
import ClassContainer from "./Components/ClassContainer";
import EquipmentCard from "./Components/EquipmentCard"
import SpellCard from "./Components/SpellCard"
import "./App.css"

export default function App() {
  return (
    <Router>
        <NavBar />
   
        <Switch>
          <Route exact path="/"> 
            WELCOME
          </Route>
          <Route exact path="/stories">
            <BackgroundContainer />
          </Route>
          <Route exact path="/class"> 
            <ClassContainer /> 
          </Route>
          <Route exact path="/equipment">
            <EquipmentCard />

          </Route>
          <Route exact path="/spells">
            <SpellCard />
          </Route>
          <Route exact path="/">
           
          </Route>
        </Switch>
      
    </Router>
  );
}
