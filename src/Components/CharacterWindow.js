import defaultCharacter from './fallout-boy.png'

function CharacterWindow({ storyPost }) {
    return (
        <div className="character-window">
            <h1>Your Character</h1>
            <img src={defaultCharacter} alt="Base Character"></img>
            <p>Name: </p>
            <p>Class: </p>
            <div className="cw-bg-story">
                Background Story: 
                <p>{storyPost} </p>
            </div>
            <p>Spells: </p>
            <p>Equiment: </p>
        </div>
    )
}

export default CharacterWindow