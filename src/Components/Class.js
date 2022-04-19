import React from 'react' 


function Class({className}){
    const { name } = className
    return(
        <div>
            <ul>{name}</ul>
        </div>
    )
}


export default Class;