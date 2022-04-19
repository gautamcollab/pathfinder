import defaultCharacter from './fallout-boy.png'

function CharacterWindow({ storyPost }) {
    return (
        <div className="character-window">
            <h1>Your Character</h1>
            <img src={defaultCharacter} alt="Base Character"></img>
            <p>Name: </p>
            <p>Class: </p>
            <p>Background Story: {storyPost} </p>
            <p>Spells: </p>
            <p>Equipment: </p>
        </div>
    )
}

export default CharacterWindow