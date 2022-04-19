import React, {useState} from 'react'
import BackgroundContainer from './BackgroundContainer';
import NavBar from './NavBar'

function Homepage() {
    const [isBgVisible, setBgVisible] = useState(false)
    return (
        <section>
       <NavBar />
       {isBgVisible ? <BackgroundContainer /> : null}
       </section>
    )
}


export default Homepage; 