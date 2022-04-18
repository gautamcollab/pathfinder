import React, { useEffect, useState } from 'react'
import Class from './Class'
import Background from './Background'
import Spells from './Spells'
import CharacterWindow from './CharacterWindow'
import Equipment from './Equipment'

function Homepage() {
    const [isVisible, setIsVisible] = useState(true)
    const handleCharWindClick = () => {
        setIsVisible(!isVisible)
    }

    const [background, setBackground] = useState([])
    useEffect(() => {
        (async () => {
              let req = await fetch('https://api.pathfinder2.fr/v1/pf2/background',{
              headers:{Authorization:'da468b89-2bf8-4e2b-a939-79c6e6ef25ce'}
              }
              )
              let res = await req.json()  
              setBackground(res.results)
          })()
      }, []) 

    return (
        <>
        <div>
            <h1>Headers</h1>
        </div> 
        <button className="char-window-button" onClick={handleCharWindClick}>{isVisible ? 'Hide Character' : 'Show Character'}</button>
        {isVisible ? <CharacterWindow /> : null}
        <div>
            <Class />
        </div>
        {background.map((element) => {
            <Background element={element} />
        })}
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