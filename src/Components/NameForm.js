import { useState } from 'react'

function NameForm({ setName }) {
    const [form, setForm] = useState('')
    const handleOnChange = (e) => {
        setForm(e.target.value)
    }
    return (
        <div>
            <input className="form-input" value={form} onChange={handleOnChange} type="text" placeholder="What is your name?"></input>
            <button className="form-button" onClick={() => {setName(form)}}>Submit</button>
        </div>
    )
}

export default NameForm;