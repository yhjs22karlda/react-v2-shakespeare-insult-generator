import './QuoteInputter.css'
import {useState} from 'react'

export default function QuoteInputter({handleAddQuote}) {
    const [insult, setInsult] = useState("")
    const [play, setPlay] = useState("")

    function resetForm() {
        setInsult("")
        setPlay("")
    }

    return (
        <article className='qInput'>
            <input
                type="text"
                placeholder='insult'
                onChange={e => setInsult(e.target.value)}
                value={insult}
            />
            <input
                type="text"
                placeholder='play'
                onChange={e => setPlay(e.target.value)}
                value={play}
            />
            <button
                onClick={() => {
                    handleAddQuote(insult,play)
                    resetForm()
                }}
            >
                Add Quote
            </button>
        </article>
    )
}