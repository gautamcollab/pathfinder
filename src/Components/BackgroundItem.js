function BackgroundItem({ story, handleStoryValue }) {
    const { name, data: {description: {value}} } = story  

    return(
        <div className="story-item" onClick={handleStoryValue}>
          <strong>{ name }</strong>
          { value }
        </div>
    )
}

export default BackgroundItem