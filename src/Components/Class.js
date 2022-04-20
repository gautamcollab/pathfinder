import React from 'react' 


function Class({className}){
    const { name } = className
    return(
            <ul className="char-class">{ name }</ul>
        
    )
}


export default Class;