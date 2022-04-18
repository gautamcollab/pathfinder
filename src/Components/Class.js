import React, {useEffect} from 'react' 


function Class(){
    
    const request = async () => {
        let req = await fetch('https://api.pathfinder2.fr/v1/pf2/class',{
        headers:{Authorization:'da468b89-2bf8-4e2b-a939-79c6e6ef25ce'}
        }
        )
        let res = await req.json()
        console.log(res)
      
    } 
    // useEffect(request, [])
    
    
    return(
        <div>
            <h1>Class</h1>
        </div>
    )
}

export default Class;