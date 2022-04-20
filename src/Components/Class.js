import React from 'react' 


function Class({className}){
    const { name, data: { description: {value} } } = className
    return(
        <div>
            <ul className="char-class">{ name }</ul>
            <ul> {value} </ul>
            
        </div>
            
    )
}


export default Class;