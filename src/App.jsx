import './App.css'
import initialQuotes from './data.js'
import Quotinator from './Quotinator'
import {useState} from 'react'

export default function App() {
    const [quotes, setQuotes] = useState(initialQuotes);
    const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));
    const [allQuotes, setAllQuotes] = useState(initialQuotes)
    console.log(allQuotes)
    
    function handleNewClick(e) {
        setQuotes(prevQ => {
            let retArr= [...prevQ]
            retArr.splice(index,1)
            if(retArr.length <3) {return allQuotes}
            return retArr
            
        })
        setIndex(Math.floor(Math.random() * (quotes.length -1)))
    }

    function handleAddQuote(insult, play) {
        setAllQuotes(prevState => {
            return [
                ...prevState,
                {insult:insult,play:play}
            ]
        })
        setQuotes(allQuotes)
    }

    return (
        <div className='app'>
            <Quotinator handleNewClick={handleNewClick}
             quote={quotes[index]}
             handleAddQuote={handleAddQuote}
            />
        </div>
    )
}

