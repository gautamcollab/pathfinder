import BackgroundItem from './BackgroundItem'

function BackgroundContainer({ backgroundData }) {
    return (
        <div>
            <h1>BackgroundContainer</h1>
            {backgroundData.map(element => {
                return <BackgroundItem key={element.id} element={element}/>
            })}
        </div>
    )
}
export default BackgroundContainer