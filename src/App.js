import './App.css';
import ClassContainer from './Components/ClassContainer';
import NavBar from './Components/NavBar';
import EquipmentCard from './Components/EquipmentCard';
import SpellCard from './Components/SpellCard';

function App() {
    return (
        <div>
            <NavBar /> 
            {/* <SpellCard /> */}
            {/* <div className="char-container">
            </div> */}
            <ClassContainer />
            {/* <EquipmentCard /> */}
        </div>
    )
}

export default App;
