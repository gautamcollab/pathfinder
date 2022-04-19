import { Switch, Route } from 'react-router-dom'
import './App.css';
// import Homepage from './Components/Homepage.js'
// import NavBar from './Components/NavBar'
import CharacterWindow from './Components/CharacterWindow'
import BackgroundContainer from './Components/BackgroundContainer'
import ClassContainer from './Components/ClassContainer'
import Equipment from './Components/Equipment'
import Spells from './Components/Spells'

function App() {
    return (
        <Switch>
            <Route path="/character">
                <CharacterWindow />
            </Route>
            <Route path="/stories">
                <BackgroundContainer />
            </Route>
            <Route path="/class">
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
