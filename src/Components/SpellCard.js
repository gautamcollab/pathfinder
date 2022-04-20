import React, {useState, useEffect} from "react";
import Spells from "./Spells";

function SpellCard() {
    const [spells, setSpell] = useState([])

    useEffect(() => {
        (async () => {
            let req = await fetch('https://api.pathfinder2.fr/v1/pf2/spell', {
                headers: {Authorization:'da468b89-2bf8-4e2b-a939-79c6e6ef25ce'}
            })
            let res = await req.json()
            console.log(res.results)
            setSpell(res.results)
        })()
    }, [])
     return (
        spells.map((element) => {
            return(
                <Spells spell={element}/> 
            )
        })
     )

}


export default SpellCard;