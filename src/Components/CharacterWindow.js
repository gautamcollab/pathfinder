import defaultCharacter from './fallout-boy.png'
import {useState} from 'react'

function CharacterWindow({ }) {
    const [classes, setClasses] = useState('')

    const handleClassClick = () => {
        setClasses()
    }
    return (
        <div className="character-window">
            <h1>Your Character</h1>
            <img src={defaultCharacter} alt="Base Character"></img>
            <p>Name: </p>
            <p>Class: </p>
            <div className="cw-bg-story">
                Background Story: 
                <p>{} </p>
            </div>
            <p>Spells: </p>
            <p>Equipment: </p>
        </div>
    )
}

export default CharacterWindow