import './Quotinator.css'
import QuoteInputter from './QuoteInputter'

export default function Quotinator({quote, handleNewClick, handleAddQuote}) {
    // console.log(quote)

    return (
        <>
            <article className="quote-box">
                <p className="quote-box__insult">{quote.insult}</p>
                <p className="quote-box__play">{quote.play}</p>
                <button className="button"
                onClick={handleNewClick}
                >New Quote</button>
            </article>
            <QuoteInputter handleAddQuote={handleAddQuote}/>
        </>
    )
}