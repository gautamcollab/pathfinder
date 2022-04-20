import { useState } from 'react'
import { Link } from 'react-router-dom'
import CharacterWindow from './CharacterWindow';
import BackgroundContainer from './BackgroundContainer';
import Equipment from './Equipment';
import Spells from './Spells';

function NavBar(){
    const [isCharVisible, setCharVisible] = useState(false)

    const handleCharWindClick = () => {
        setCharVisible(!isCharVisible)
    }

    // const handleBgStoryClick = () => {
    //     setBgVisible(!isBgVisible)
    // }
    
    return (
        <nav className="navbar"> 
            <button>Light Mode/Dark Mode</button> 
            <Link to='/stories'>
              <button>Stories</button>
            </Link>
            <Link to='/classes'>
              <button>Classes</button> 
            </Link>
            <Link>
              {/* <button onClick={handleBgStoryClick}>Background Stories</button> */}
              {/* {isBgVisible ? <BackgroundContainer /> : null} */}
            </Link>
            <Link to='/equipment'>
              <button>Equipment </button>
            </Link>
            <Link to='/spells'>
              <button>Spells</button>
            </Link>
            <Link to='/character'>
              <button className="char-window-button" onClick={handleCharWindClick}>{isCharVisible ? 'Hide Character' : 'Show Character'}</button>
              {isCharVisible ? <CharacterWindow /> : null}
            </Link>
        </nav>
    )

}



export default NavBar; 