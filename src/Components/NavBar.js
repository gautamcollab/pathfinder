import React, {useState, useEffect} from 'react'; 
import CharacterWindow from './CharacterWindow';
import BackgroundContainer from './BackgroundContainer';
import Equipment from './Equipment';
import Spells from './Spells';

function NavBar(){
    const [isCharVisible, setCharVisible] = useState(false)
    const [isBgVisible, setBgVisible] = useState(false)

    const handleCharWindClick = () => {
        setCharVisible(!isCharVisible)
    }
    const handleBgStoryClick = () => {
        setBgVisible(!isBgVisible)
    }
    
    return (
        <nav className="navbar"> 
        <div>
            <button className="char-window-button" onClick={handleCharWindClick}>{isCharVisible ? 'Hide Character' : 'Show Character'}</button>
            {isCharVisible ? <CharacterWindow /> : null}
        
        
            <button>Classes</button> 
        
        
            <button onClick={handleBgStoryClick}>Background Stories</button>
            {isBgVisible ? <BackgroundContainer /> : null}
      
            <button>Equipment </button>
      
            <button>Spells</button>
     
        <div>Light Mode/Dark Mode</div> 
        </div>
        </nav>
    )

}



export default NavBar; 