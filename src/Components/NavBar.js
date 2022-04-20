import { Link } from 'react-router-dom'

function NavBar({ handleBgStoryClick }){
    
    return (
        <nav className="navbar"> 
            <Link to='/stories'>
              {/* <button className="navbutton" onClick={handleBgStoryClick}>Stories</button> */}
              Background
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
              {/* <button className="navbutton" onClick={handleCharWindClick}>{isCharVisible ? 'Hide Character' : 'Show Character'}</button> */}
            </Link>
        </nav>
    )

}



export default NavBar; 