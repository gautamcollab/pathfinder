

function Spells({ handleSpellValue, spell }) {
    const { name } = spell 
    return (
        <div onClick={handleSpellValue}>
            <h1>{ name }</h1>
        </div>
    )
}

export default Spells;