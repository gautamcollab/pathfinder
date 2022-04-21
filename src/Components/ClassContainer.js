import React, {useState, useEffect} from "react";
import Class from "./Class";

function ClassContainer({handleClassValue}){
    const [charClass, setCharClass] = useState([])

   useEffect(() => {
     (async () => {
           let req = await fetch('https://api.pathfinder2.fr/v1/pf2/class',{
           headers:{Authorization:'da468b89-2bf8-4e2b-a939-79c6e6ef25ce'}
           })
           let res = await req.json()  
           setCharClass(res.results)
           console.log(res.results)
        })()
   }, []) 
   
    return (
        <div className="class-container">
        {charClass.map((element) => {
            return(
                <Class handleClassValue={handleClassValue} key={element.name} className={element} />
            )
        })}
      </div>
    );
}

export default ClassContainer;