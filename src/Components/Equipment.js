import React from 'react'; 

function Equipment({equip, handleEquipValue}) {
    const { name } = equip 

    return (
        <div onClick={handleEquipValue} className="container">
            <ul> {name} </ul>
        </div>
    )
}

export default Equipment;