import React from 'react' 


function Class({className}){
    const { name } = className
    return(
        <div>
            <li>{name}</li>
        </div>
    )
}


export default Class;