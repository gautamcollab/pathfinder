
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css';
import RenderPage from './Components/RenderPage'
import NavBar from './Components/NavBar';
import Spells from './Components/Spells';
import EquipmentCard from './Components/EquipmentCard';
import CharacterWindow from './Components/CharacterWindow'
import BackgroundContainer from './Components/BackgroundContainer'
import ClassContainer from './Components/ClassContainer';

function App() {
    // const [isCharVisible, setCharVisible] = useState(false)
    // const [isBgVisible, setBgVisible] = useState(false)
    // const [storyPost, setStoryPost] = useState('')

    // const handleCharWindClick = () => {
    //     setCharVisible(!isCharVisible)
    // }
    // const handleBgStoryClick = () => {
    //     setBgVisible(!isBgVisible)
    // }

    return (
        <Switch>
              <NavBar 
                // handleCharWindClick={handleCharWindClick} 
                // handleBgStoryClick={handleBgStoryClick}
                // isCharVisible={isCharVisible} 
              />
              {/* <RenderPage 
                // isBgVisible={isBgVisible}
                // isCharVisible={isCharVisible} 
                // storyPost={storyPost}
                // setStoryPost={setStoryPost}
              /> */}
            <Route path="/character">
                {/* <CharacterWindow /> */}
            </Route>
            <Route path="/stories">
                {/* <BackgroundContainer /> */}
                <h1>Background</h1>
            </Route>
            <Route path="/classes">
                <ClassContainer />
            </Route>
            <Route path="/equipment">
                <EquipmentCard />
            </Route>
            <Route path="/spells">
                <Spells />
            </Route>
        </Switch>
    )
}

export default App;