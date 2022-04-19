function BackgroundItem({ element, setStoryPost }) {
    const { name, data: { description: { value } } } = element
    const handleClickStory = () => {
        setStoryPost(() => {
            return (
                <div>
                    {name} :
                    {value}
                </div>
            )
        })
    }
    return(
        <div className="body-content">
            {element.data.description.value}
        </div>
    )
}

export default BackgroundItem