function BackgroundItem({element}) {
    return(
        <div className="body-content">
            {element.data.description.value}
        </div>
    )
}

export default BackgroundItem