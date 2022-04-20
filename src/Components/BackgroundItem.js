function BackgroundItem({ element, setStoryPost }) {
    const { name, data: { description: { value } } } = element
    const handleClickStory = () => {
        setStoryPost(() => {
            return (
                <div>
                    <strong>{name} : </strong>
                    {value}
                </div>
            )
        })
    }
    return(
        <div className="bg-item" onClick={handleClickStory}>
            <strong>{name}</strong>
            <p>{value}</p>
        </div>
    )
}

export default BackgroundItem