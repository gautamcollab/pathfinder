import { Link } from 'react-router-dom'


function NavBar({windowState, handleWindowClick}) {
    
    return (
        <nav className="navbar"> 
            <Link to='/'>
            <button className="navbutton">Home</button>
            </Link>
            <Link to='/stories'>
              <button className="navbutton">Stories</button>
            </Link>
            <Link to='/class'>
              <button className="navbutton">Classes</button> 
            </Link>
            <Link to='/equipment'>
              <button className="navbutton">Equipment </button>
            </Link>
            <Link to='/spells'>
              <button className="navbutton">Spells</button>
            </Link>
            <button onClick={handleWindowClick}>{windowState ? 'Hide Character' : 'Show Character'}</button>
           
        </nav>
    )

}



export default NavBar; 
