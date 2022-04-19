import BackgroundItem from './BackgroundItem'

function BackgroundContainer({ background }) {
    return (
        <div>
            <div>BackgroundContainer</div>
            {background.map(element => {
                return <BackgroundItem key={element.id} element={element}/>
            })}
        </div>
    )
}
export default BackgroundContainer