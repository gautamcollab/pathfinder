import imageData from './CharacterImages'

function Appearance({handleAppearanceValue}) {
    // console.log(imageData)
    return (
        <div className="model-container">
            <img onClick={handleAppearanceValue}className="model" src={imageData.Char1} alt="alchemist" width="500" height="500"></img>
            <img className="model" src={imageData.Char2} alt="barbarian" width="500" height="500"></img>
            <img className="model" src={imageData.Char3} alt="battlemage" width="500" height="500"></img>
            <img className="model" src={imageData.Char4} alt="champion" width="500" height="500"></img>
            <img className="model" src={imageData.Char5} alt="cleric" width="500" height="500"></img>
            <img className="model" src={imageData.Char6} alt="creature" width="500" height="500"></img>
            <img className="model" src={imageData.Char7} alt="dragon" width="500" height="500"></img>
            <img className="model" src={imageData.Char8} alt="dragonguy" width="500" height="500"></img>
            <img className="model" src={imageData.Char9} alt="investigator" width="500" height="500"></img>
            <img className="model" src={imageData.Char10} alt="magus" width="500" height="500"></img>
            <img className="model" src={imageData.Char11} alt="oracle" width="500" height="500"></img>
            <img className="model" src={imageData.Char12} alt="pumpkin" width="500" height="500"></img>
            <img className="model" src={imageData.Char13} alt="ranger" width="500" height="500"></img>
            <img className="model" src={imageData.Char14} alt="rogue" width="500" height="500"></img>
            <img className="model" src={imageData.Char15} alt="skeleton" width="500" height="500"></img>
            <img className="model" src={imageData.Char16} alt="sorceress" width="500" height="500"></img>
            <img className="model" src={imageData.Char17} alt="troll" width="500" height="500"></img>
            <img className="model" src={imageData.Char18} alt="werewolf" width="500" height="500"></img>
            <img className="model" src={imageData.Char19} alt="witch" width="500" height="500"></img>
            <img className="model" src={imageData.Char20} alt="wizard" width="500" height="500"></img>
        </div>
    )
}

export default Appearance;