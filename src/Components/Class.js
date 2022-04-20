import React from 'react' 


function Class({className}){
    const { name } = className
    return(
        <div>
            <ul className="char-class">{ name }</ul>
        </div>        
    )
}


export default Class;