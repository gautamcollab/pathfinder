import {useState} from 'react' 

function Spells({ handleSpellValue, spell }) {
    const { name, data: {description: {value}} } = spell 
    const [desc, setDesc] = useState(false)

    const spellDesc = () => {
        console.log(desc)
        // Array.from(e.target.children).forEach((div) => {
        //     div.setAttribute('class', 'spell-info-visible togglable')   
        // })
        setDesc(!desc)
    }


    return (
            <div className="spell" onMouseEnter={spellDesc} onMouseLeave={spellDesc}>
                <div onClick={handleSpellValue} 
                >{ name }</div>
                {/* <div className="spell-desc">
                   {desc ? value : null } 
                </div> */}
                <div className="spell-info-hidden togglable">All info here</div>
            </div>
    )
}

export default Spells;