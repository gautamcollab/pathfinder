import BackgroundItem from './BackgroundItem'

function BackgroundContainer({ background }) {
    return (
        <div>
            <h1>BackgroundContainer</h1>
            {background.map(element => {
                return <BackgroundItem key={element.id} element={element}/>
            })}
        </div>
    )
}
export default BackgroundContainer