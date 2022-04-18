import React from 'react'
import Class from './Class'
import ClassContainer from './ClassContainer'
import Background from './Background'
import Spells from './Spells'
import CharacterWindow from './CharacterWindow'
import Equipment from './Equipment'

function Homepage() {
    return (
        <>
        <div>
            <h1>Header</h1>
        </div> 
        <div>
            <ClassContainer />
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
        <div>
            <CharacterWindow />
        </div> 
        <div>Light Mode/Dark Mode</div> 
        </>
    )

}


export default Homepage; 