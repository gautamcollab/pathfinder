import defaultCharacter from './fallout-boy.png'

function CharacterWindow({storyValue, classValue, spellValue, equipValue}) {
    return (
        <div className="character-window">
            <h1>Your Character</h1>
            <img src={defaultCharacter} alt="Base Character"></img>
            <p>Name: </p>
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
        </div>
    )
}

export default CharacterWindow