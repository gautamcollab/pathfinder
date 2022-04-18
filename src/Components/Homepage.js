import React, { useState } from 'react'
import Class from './Class'
import Background from './Background'
import Spells from './Spells'
import CharacterWindow from './CharacterWindow'
import Equipment from './Equipment'

function Homepage() {
    const [isVisible, setIsVisible] = useState(true)
    const handleCharWindClick = () => {
        setIsVisible(!isVisible)
    }

    return (
        <>
        <div>
            <h1>Header</h1>
        </div> 
        <button className="char-window-button" onClick={handleCharWindClick}>{isVisible ? 'Hide Character' : 'Show Character'}</button>
        {isVisible ? <CharacterWindow /> : null}
        <div>
            <Class />
        </div>
        <div>
            <Background />
        </div> 
        <div>
            <Equipment />
        </div> 
        <div>
            <Spells />
        </div>
        <div>Light Mode/Dark Mode</div> 
        </>
    )

}


export default Homepage; 