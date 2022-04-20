import React from 'react' 


function Class({handleClassValue, className}){
    const { name } = className
    return(
        <div onClick={handleClassValue}>
          <ul className="char-class">{ name }</ul>
        </div>
        
    )
}


export default Class;