import BackgroundItem from './BackgroundItem'
import { useEffect, useState } from 'react'

function BackgroundContainer() {

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
        <div>
            <div>BackgroundContainer</div>
            {background.map(element => {
                return <BackgroundItem key={element.id} element={element}/>
            })}
        </div>
    )
}
export default BackgroundContainer