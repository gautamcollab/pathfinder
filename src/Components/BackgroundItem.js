function BackgroundItem({ story }) {
    const { name, data: {description: {value}} } = story  


    return(
        <div>
          <strong>{ name }</strong>
          { value }
        </div>
    )
}

export default BackgroundItem