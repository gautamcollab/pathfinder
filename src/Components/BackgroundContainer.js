import BackgroundItem from './BackgroundItem'
import { useEffect, useState } from 'react'

function BackgroundContainer({storyPost, setStoryPost}) {

    const [background, setBackground] = useState([])

    useEffect(() => {
        (async () => {
              let req = await fetch('https://api.pathfinder2.fr/v1/pf2/background',{
              headers:{Authorization:'da468b89-2bf8-4e2b-a939-79c6e6ef25ce'}
              }
              )
              let res = await req.json()  
              setBackground(res.results)
              console.log(res.results)
          })()
      }, []) 

    return (
        <div>
            <div className="background-title">BackgroundContainer</div>
            {background.map(element => {
                return <BackgroundItem key={element.id} element={element} storyPost={storyPost} setStoryPost={setStoryPost} />
            })}
        </div>
    )
}
export default BackgroundContainer