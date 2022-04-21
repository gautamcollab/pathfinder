import defaultCharacter from './fallout-boy.png'
import { useState } from 'react'
import NameForm from './NameForm'

function CharacterWindow({storyValue, classValue, spellValue, equipValue}) {
    const [name, setName] = useState('')
    return (
        <div className="character-window">
            <h1>Your Character</h1>
            <img src={defaultCharacter} alt="Base Character"></img>
            <p>Name: { name }</p>
            <div className="cw-class">
                Class: {classValue}
            </div>
            <div className="cw-spell">
                Spells: {spellValue}              
            </div>
            <div className="cw-equip">
                Equipment: {equipValue}
            </div>
            <div className="cw-story">
                Background Story: 
                <p>{storyValue}</p>
            </div>
            <NameForm setName={setName} />
        </div>
    )
}

export default CharacterWindow