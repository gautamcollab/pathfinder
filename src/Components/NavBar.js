import { Link } from 'react-router-dom'

function NavBar({isCharVisible, handleBgStoryClick, handleCharWindClick}){
    
    return (
        <nav className="navbar"> 
            <button>Light Mode/Dark Mode</button> 
            <Link to='/stories'>
              <button onClick={handleBgStoryClick}>Stories</button>
            </Link>
            <Link to='/classes'>
              <button>Classes</button> 
            </Link>
            <Link to='/equipment'>
              <button>Equipment </button>
            </Link>
            <Link to='/spells'>
              <button>Spells</button>
            </Link>
            <Link to='/character'>
              <button className="char-window-button" onClick={handleCharWindClick}>{isCharVisible ? 'Hide Character' : 'Show Character'}</button>
            </Link>
        </nav>
    )

}



export default NavBar; 