import defaultCharacter from './fallout-boy.png'
import { useState } from 'react'
import NameForm from './NameForm'

function CharacterWindow({storyValue, classValue, spellValue, equipValue}) {
    const [name, setName] = useState('')
    return (
        <div className="character-window">
            <div className="cw-title">
                Your Character
            </div>
            <img src={defaultCharacter} alt="Base Character"></img>
            <div className="cw-text">
                Name: { name }
            </div >
            <div className="cw-text">
                Class: {classValue}
            </div>
            <div className="cw-text">
                Spells: {spellValue}              
            </div>
            <div className="cw-text">
                Equipment: {equipValue}
            </div>
            <div className="cw-bg">
                Background Story: 
                <p>{storyValue}</p>
            </div>
            <div className="form">
                <NameForm setName={setName} />
            </div>
        </div>
    )
}

export default CharacterWindow