import {useState} from "react";
import {Button} from "reactstrap";

const quotes_test = [
	{ quote: "teste1", author: "t1"},
	{ quote: "teste2", author: "t2" },
]

function Quote() {
	const [quote, setQuote] = useState(
			test ? quotes_test[0] 
			: get_random_quote()
		);

	return (
		<div id="quote-box" data-testid="quote-box">
			<div id="text" data-testid="text">{quote.quote}</div>
			<div id="author" data-testid="author">{quote.author}</div>
			<Button 
				id="new-quote" 
				data-testid="new-quote" 
				color="primary"
				size="sm"
				onClick={() => 
					setQuote(
						test ? quotes_test[1]
						: get_random_quote()
					)}>
				New Quote
			</Button>
			<a 
				id="tweet-quote" 
				data-testid="tweet-quote"
				href="/">
				Tweet quote
			</a>
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
