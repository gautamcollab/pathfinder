import React, {useState, useEffect} from 'react';
import Equipment from './Equipment';

function EquipmentCard(){
    const [equipments, setEquipment] = useState([])

    useEffect(() => {
        (async () => {
            let req = await fetch('https://api.pathfinder2.fr/v1/pf2/equipment', {
                headers: {Authorization:'da468b89-2bf8-4e2b-a939-79c6e6ef25ce'}
            })
            let res = await req.json()
            // res.results.map(element => {console.log(element.data)})


            setEquipment(res.results)
        })()
    }, [])

    return (
        equipments.map((element) => {
            return(
                <Equipment key={element.name} equip = {element}/>
            )
        })
    )
}




export default EquipmentCard;