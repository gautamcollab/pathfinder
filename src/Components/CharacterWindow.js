// import defaultCharacter from ''
import { useState } from 'react'
import NameForm from './NameForm'
import imageData from './CharacterImages'

function CharacterWindow({storyValue, classValue, spellValue, equipValue, isCharOneVisible, isCharTwoVisible, isCharThreeVisible, isCharFourVisible, isCharFiveVisible, handleCharOneVisible, handleCharTwoVisible, handleCharThreeVisible, handleCharFourVisible, handleCharFiveVisible}) {
    const [name, setName] = useState('')

    // const handleSpecificCharacter = () => {
    //     if (isCharOneVisible === true) {
    //         return <img src={imageData.Char1}></img>
    //     }  else if (<img src={imageData.Char1}></img> !== true) {
    //         return null
    //     }
    //         return null
    // }
    return (
        <div className="character-window">
            <div className="cw-title">
                Your Character
            </div>
            <div onClick={handleCharOneVisible} className="cw-char1">
                {isCharOneVisible ? <img src={imageData.Char1}></img> : null}
            </div>
            <div onClick={handleCharTwoVisible} className="cw-char2">
                {isCharTwoVisible ? <img src={imageData.Char2}></img> : null}
            </div>
            <div onClick={handleCharThreeVisible} className="cw-char2">
                {isCharThreeVisible ? <img src={imageData.Char3}></img> : null}
            </div>
            <div onClick={handleCharFourVisible} className="cw-char2">
                {isCharFourVisible ? <img src={imageData.Char4}></img> : null}
            </div>
            <div onClick={handleCharFiveVisible} className="cw-char2">
                {isCharFiveVisible ? <img src={imageData.Char5}></img> : null}
            </div>
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