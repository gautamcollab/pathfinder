import BackgroundItem from './BackgroundItem'
import { useEffect, useState } from 'react'

function BackgroundContainer({handleStoryValue}) {
    const [stories, setStory] = useState([])

    useEffect(() => {
        (async () => {
              let req = await fetch('https://api.pathfinder2.fr/v1/pf2/background',{
              headers:{Authorization:'da468b89-2bf8-4e2b-a939-79c6e6ef25ce'}
              } )
              let res = await req.json()  
              setStory(res.results)
          })()
      }, [])

    return (
        <div className="stories-container">
      {stories.map((element) => {
          return (
              <BackgroundItem key={element.name} story={element} handleStoryValue={handleStoryValue} />
          )
      })}
      </div>
    )
}
export default BackgroundContainer