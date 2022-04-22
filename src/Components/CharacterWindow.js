// import defaultCharacter from ''
import { useState } from 'react'
import NameForm from './NameForm'

function CharacterWindow({storyValue, classValue, spellValue, equipValue, image}) {
    const [name, setName] = useState('')
    return (
        <div className="character-window">
            <div className="cw-title">
                Your Character
            </div>
            {/* <img src={defaultCharacter} alt="Base Character"></img> */}
            <img src={image} alt="clicked image"></img>
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