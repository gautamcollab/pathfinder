import React, {useState} from 'react' 


function Class({handleClassValue, className}){
    const { name, data: {description: {value}} } = className
    const [desc, setDesc] = useState(false)
    
    const classDesc = () => {
      setDesc(!desc) 
    }

    
    return(

      
        <div onClick={handleClassValue} >
          <div className="char-class" onClick={classDesc}>{ name }
          </div>
          <div className="char-desc" > 
          {desc ? value : null} </div>
            
        </div>
        
    )
}


export default Class;