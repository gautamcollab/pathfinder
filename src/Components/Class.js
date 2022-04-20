import React from 'react' 

function Class({className}){
    const { name } = className
    return(
        <div className="class-container">
            <ul className="char-class">{ name }</ul>
        </div>
              
    )
}


export default Class;