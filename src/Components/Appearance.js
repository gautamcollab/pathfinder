import imageData from './CharacterImages'

function Appearance({handleCharOneVisible, handleCharTwoVisible, handleCharThreeVisible, handleCharFourVisible, handleCharFiveVisible}) {
    // console.log(imageData)
    return (
        <div className="model-container">
            <img onClick={handleCharOneVisible} className="model" src={imageData.Char1} alt="warrior" width="500" height="500"></img>
            <img onClick={handleCharTwoVisible} className="model" src={imageData.Char2} alt="battlemage" width="500" height="500"></img>
            <img onClick={handleCharThreeVisible} className="model" src={imageData.Char3} alt="investigator" width="500" height="500"></img>
            <img onClick={handleCharFourVisible} className="model" src={imageData.Char4} alt="pumpkin" width="500" height="500"></img>
            <img onClick={handleCharFiveVisible} className="model" src={imageData.Char5} alt="sorceress" width="500" height="500"></img>
        </div>
    )
}

export default Appearance;