import './App.css';
import ClassContainer from './Components/ClassContainer';
import Equipment from './Components/Equipment';
import NavBar from './Components/NavBar';
import Spells from './Components/Spells';
import EquipmentCard from './Components/EquipmentCard';

function App() {
    return (
        <div>
            <NavBar /> 
            {/* <Spells /> */}
            {/* <div className="char-container">
            </div> */}
            <ClassContainer />
            <EquipmentCard />
        </div>
    )
}

export default App;
