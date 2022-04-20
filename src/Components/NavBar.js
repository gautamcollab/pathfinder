import { Link } from 'react-router-dom'

function NavBar({isCharVisible, handleBgStoryClick, handleCharWindClick}){
    
    return (
        <nav className="navbar"> 
            <button className="navbutton">Light Mode/Dark Mode</button> 
            <Link to='/stories'>
              <button className="navbutton" onClick={handleBgStoryClick}>Stories</button>
            </Link>
            <Link to='/classes'>
              <button className="navbutton">Classes</button> 
            </Link>
            <Link to='/equipment'>
              <button className="navbutton">Equipment </button>
            </Link>
            <Link to='/spells'>
              <button className="navbutton">Spells</button>
            </Link>
            <Link to='/character'>
              <button className="navbutton" onClick={handleCharWindClick}>{isCharVisible ? 'Hide Character' : 'Show Character'}</button>
            </Link>
        </nav>
    )

}



export default NavBar; 