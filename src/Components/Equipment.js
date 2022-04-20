import React from 'react'; 

function Equipment({equip}) {
    const { name } = equip 

    return (
        <div className="container">
            <ul> {name} </ul>
        </div>
    )
}

export default Equipment;