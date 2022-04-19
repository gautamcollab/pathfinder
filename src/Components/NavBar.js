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
            {/* <button className="char-window-button" onClick={handleCharWindClick}>{isCharVisible ? 'Hide Character' : 'Show Character'}</button>
            {isCharVisible ? <CharacterWindow /> : null} */}
        
        
            <div className="navbutton">Classes</div> 
        
            <div className="navbutton" onClick={handleBgStoryClick}>Background</div>

            {/* <button onClick={handleBgStoryClick}>Background Stories</button> */}
            {isBgVisible ? <BackgroundContainer /> : null}
      
            <div className="navbutton">Equipment </div>
      
            <div className="navbutton">Spells</div>
     
        {/* <div>Light Mode/Dark Mode</div>  */}
        
        </nav>
    )

}



export default NavBar; 