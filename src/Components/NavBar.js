import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'
import CharacterWindow from './CharacterWindow';
import BackgroundContainer from './BackgroundContainer';
import Equipment from './Equipment';
import Spells from './Spells';

function NavBar(){
    const [isCharVisible, setCharVisible] = useState(false)

    // const handleCharWindClick = () => {
    //     setCharVisible(!isCharVisible)
    // }
    // const handleBgStoryClick = () => {
    //     setBgVisible(!isBgVisible)
    // }
    
    return (
        <nav className="navbar"> 
        <div>
            <Link to='/character'>
              <CharacterWindow />
              {/* <button className="char-window-button" onClick={handleCharWindClick}>{isCharVisible ? 'Hide Character' : 'Show Character'}</button> */}
              {/* {isCharVisible ? <CharacterWindow /> : null} */}
            </Link>
            <Link to='/stories'>
              <BackgroundContainer />
            </Link>
            <Link>
              <button>Classes</button> 
            </Link>
            <Link>
              {/* <button onClick={handleBgStoryClick}>Background Stories</button> */}
              {/* {isBgVisible ? <BackgroundContainer /> : null} */}
            </Link>
            <Link>
              <button>Equipment </button>
            </Link>
            <Link>
              <button>Spells</button>
            </Link>    
            <div>Light Mode/Dark Mode</div> 
        </div>
        </nav>
    )

}



export default NavBar; 