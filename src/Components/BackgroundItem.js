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
        <div className="bg-item" onClick={handleClickStory}>
            <h1>{name}</h1>
            <p>{value}</p>
        </div>
    )
}

export default BackgroundItem