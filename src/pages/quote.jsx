import {useState} from "react";
import {Button} from "reactstrap";

function Quote() {
	const [quote, setQuote] = useState(get_random_quote());

	return (
		<div id="quote-box">
			<div id="text">{quote.quote}</div>
			<div id="author">{quote.author}</div>
			<Button 
				id="new-quote" 
				color="primary"
				size="sm"
				onClick={() => setQuote(get_random_quote())}>
				New Quote
			</Button>
			<a id="tweet-quote" href="/">Tweet quote</a>
		</div>
	);
}

function get_random_quote() {
	const quotes = [
		{
			author: "t",
			quote: "teste1"
		},
		{
			author: "t1",
			quote: "teste2"
		},
	]

	return quotes[Math.floor(Math.random() * quotes.length)];
}

export default Quote;
