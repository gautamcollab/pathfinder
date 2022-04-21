import React from 'react' 

function Class({handleClassValue, className}){
    const { name } = className
    return(
        <div onClick={handleClassValue}>
          <div className="char-class">{ name }
          </div>
        </div>
        
    )
}


export default Class;