import React from 'react'; 

function Equipment({equip, handleEquipValue}) {
    const { name } = equip 

    return (
        <div onClick={handleEquipValue} className="equip">
            {name} 
        </div>
    )
}

export default Equipment;