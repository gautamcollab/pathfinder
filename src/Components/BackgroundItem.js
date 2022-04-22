import {useState} from 'react';

function BackgroundItem({ story, handleStoryValue }) {
    const { name, data: {description: {value}} } = story  
    const [desc, setDesc] = useState(false) 

    const storyDesc = () => {
      setDesc(!desc)
    }

    return(
      <div className="story" onMouseEnter={storyDesc} onMouseLeave={storyDesc}> 
          <div onClick={handleStoryValue}>
            <div>{name}</div>
            <div className="stories"> 
            {desc ? value : null } </div>
            </div>
        </div>
    )
}

export default BackgroundItem