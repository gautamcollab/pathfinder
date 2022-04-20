import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './Components/NavBar'
import CharacterWindow from './Components/CharacterWindow'
import BackgroundContainer from './Components/BackgroundContainer'
import ClassContainer from './Components/ClassContainer'
import Equipment from './Components/Equipment'
import Spells from './Components/Spells'
import './App.css'

function App() {
    const [isCharVisible, setCharVisible] = useState(false)
    const [isBgVisible, setBgVisible] = useState(false)
    const [storyPost, setStoryPost] = useState('')

    const handleCharWindClick = () => {
        setCharVisible(!isCharVisible)
    }
    const handleBgStoryClick = () => {
        setBgVisible(!isBgVisible)
    }

    return (
        <Switch>
            <div>
              <NavBar 
                handleCharWindClick={handleCharWindClick} 
                handleBgStoryClick={handleBgStoryClick}
                isCharVisible={isCharVisible} 
              />
            </div>
            <Route path="/character">
            {isCharVisible ? <CharacterWindow storyPost={storyPost} /> : null}
            </Route>
            <Route path="/stories">
            {isBgVisible ? <BackgroundContainer setStoryPost={setStoryPost}/> : null}
            </Route>
            <Route path="/classes">
                <ClassContainer />
            </Route>
            <Route path="/equipment">
                <Equipment />
            </Route>
            <Route path="/spells">
                <Spells />
            </Route>
        </Switch>
    )
}

export default App;
