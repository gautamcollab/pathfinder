// import defaultCharacter from '../Images/characterfigurecropped.png'
import { useState } from 'react'
import NameForm from './NameForm'

function CharacterWindow({storyValue, classValue, spellValue, equipValue}) {
    const [name, setName] = useState('')
    return (
        <div className="character-window">
            <div className="cw-title">
                Your Character
            </div>
            {/* <img src={defaultCharacter} alt="Base Character"></img> */}
            <div className="cw-name">
                Name: { name }
            </div >
            <div className="cw-class">
                Class: {classValue}
            </div>
            <div className="cw-equip">
                Equipment: {equipValue}
            </div>
            <div className="cw-spell">
                Spells: {spellValue}              
            </div>
            <div className="cw-bg">
                Background Story: 
                <p>{storyValue}</p>
            </div>
            <div>
                <NameForm setName={setName} />
            </div>
        </div>
    )
}

export default CharacterWindow