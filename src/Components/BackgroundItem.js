function BackgroundItem({ element }) {
    const { name, data: { description: { value } } } = element
    return(
        <div>
            <h1>{name}</h1>
            <p>{value}</p>
        </div>
    )
}

export default BackgroundItem