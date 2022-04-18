function BackgroundItem({element}) {
    return(
        <div>
            <h1>Background Item</h1>
            <p>{element.data.description.value}</p>
        </div>
    )
}

export default BackgroundItem