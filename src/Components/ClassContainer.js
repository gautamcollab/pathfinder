import React, {useState, useEffect} from "react";
import Class from "./Class";

function ClassContainer(){
    const [charClass, setCharClass] = useState([])
    const [charDesc, setCharDesc] = useState([])


   useEffect(() => {
     (async () => {
           let req = await fetch('https://api.pathfinder2.fr/v1/pf2/class',{
           headers:{Authorization:'da468b89-2bf8-4e2b-a939-79c6e6ef25ce'}
           }
           )
           let res = await req.json()  
           setCharClass(res.results)
           console.log(res.results)
        })()
   }, []) 
   


    return (
        charClass.map((element) => {
            return(
                
                <Class key={element.id} className={element} />
            )
        })
    );
}

export default ClassContainer;