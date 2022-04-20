import React from "react";
import { useState } from 'react'
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
import CharacterWindow from './Components/CharacterWindow'
import "./App.css"

export default function App() {
  const [windowState, setWindowState] = useState(false)
  const [storyValue, setStoryValue] = useState('')
  const [classValue, setClassValue] = useState('')
  const [spellValue, setSpellValue] = useState('')
  const [equipValue, setEquipValue] = useState('')

  const handleWindowClick = () => {
      setWindowState(!windowState)
  }
  const handleStoryValue = (e) => {
    setStoryValue(e.target.textContent)
  }
  const handleClassValue = (e) => {
    setClassValue(e.target.textContent)
  }
  const handleSpellValue = (e) => {
    setSpellValue(e.target.textContent)
  }
  const handleEquipValue = (e) => {
    setEquipValue(e.target.textContent)
  }


  return (
    <Router>
        <NavBar windowState={windowState} handleWindowClick={handleWindowClick}/>
        {windowState ? <CharacterWindow 
            storyValue={storyValue} 
            classValue={classValue}
            spellValue={spellValue}
            equipValue={equipValue}
            /> 
        : null}
        <Switch>
          <Route exact path="/"> 
            WELCOME
          </Route>
          <Route exact path="/stories">
            <BackgroundContainer handleStoryValue={handleStoryValue} />
          </Route>
          <Route exact path="/class"> 
            <ClassContainer handleClassValue={handleClassValue} /> 
          </Route>
          <Route exact path="/equipment">
            <EquipmentCard handleEquipValue={handleEquipValue}/>
          </Route>
          <Route exact path="/spells">
            <SpellCard handleSpellValue={handleSpellValue} />
          </Route>
        </Switch>
      
    </Router>
  );
}
