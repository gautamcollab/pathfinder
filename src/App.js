import './App.css';
import ClassContainer from './Components/ClassContainer';
import NavBar from './Components/NavBar';
import Spells from './Components/Spells';

function App() {
    return (
        <div>
            <NavBar /> 
            {/* <Spells /> */}
            <div className="char-container">
              <ClassContainer />
            </div>
            
        </div>
    )
}

export default App;
