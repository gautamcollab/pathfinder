import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import CharacterWindow from './Components/CharacterWindow'
import BackgroundContainer from './Components/BackgroundContainer'
import ClassContainer from './Components/ClassContainer'
import Equipment from './Components/Equipment'
import Spells from './Components/Spells'

function App() {

    return (
        <Switch>
            <div>
                <NavBar/>
            </div>
            <Route path="/character">
                <CharacterWindow />
            </Route>
            <Route path="/stories">
                <BackgroundContainer />
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
