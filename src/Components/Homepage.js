import { useState } from 'react'
import Class from './Class'
import BackgroundContainer from './BackgroundContainer'
import React from 'react'
import ClassContainer from './ClassContainer'
import Spells from './Spells'
import CharacterWindow from './CharacterWindow'
import Equipment from './Equipment'

function Homepage() {
    const [isCharVisible, setCharVisible] = useState(false)
    const [storyPost, setStoryPost] = useState('')

    const handleCharWindClick = () => {
        setCharVisible(!isCharVisible)
    }
    return (
        <>
        <div>
            <h1>Headers</h1>
        </div> 
        <div>
            <button className="char-window-button" onClick={handleCharWindClick}>{isCharVisible ? 'Hide Character' : 'Show Character'}</button>
            {isCharVisible ? <CharacterWindow storyPost={storyPost} /> : null}
        </div>
        <div>
            <button>Classes</button> 
        </div>
        <div>
            <h1>Background Stories</h1>
            <BackgroundContainer storyPost={storyPost} setStoryPost={setStoryPost}/>
        </div>
        <div>
            <Equipment />
        </div> 
        <div>
            <Spells />
        </div>
        <div>Light Mode/Dark Mode</div> 
        </>
    )
}


export default Homepage; 