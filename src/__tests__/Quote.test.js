import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Quote from '../pages/quote';

afterAll(cleanup);

test('render quote-box', () => {
  render(<Quote />);
  const quoteBoxElement = screen.getByTestId("quote-box");
  expect(quoteBoxElement).toBeInTheDocument();
});

test('render text', () => {
	render(<Quote />);
	let textElement = screen.getByTestId("text");
	expect(textElement).toBeInTheDocument();
});

test('render author', () => {
	render(<Quote />);
	const authorElement = screen.getByTestId("author");
	expect(authorElement).toBeInTheDocument();
});

test('render new-quote clickable', () => {
	render(<Quote/>);
	const newQuoteElement = screen.getByTestId("new-quote");
	expect(newQuoteElement).toBeInTheDocument();
	expect(newQuoteElement).toContainHTML("New Quote");
})

test('render tweet-quote', () => {
	render(<Quote/>);
	const tweetQuoteElement = screen.getByTestId("tweet-quote");
	expect(tweetQuoteElement).toBeInTheDocument();
	expect(tweetQuoteElement).toContainHTML("Tweet quote");
}) 

test('when click on #new-quote render a new quote in #text', () => {
	render(<Quote/>)
	let textElement = screen.getByTestId("text");
	expect(textElement).toContainHTML("teste1");
	
	fireEvent.click(screen.getByTestId("new-quote"));

	textElement = screen.getByTestId("text");
	expect(textElement).toBeInTheDocument();
	expect(textElement).toContainHTML("teste2");
})

test('when click on #new-quote render a the new quotes author in #author', () => {
	render(<Quote/>)
	let textElement = screen.getByTestId("author");
	expect(textElement).toContainHTML("t1");
	
	fireEvent.click(screen.getByTestId("new-quote"));

	textElement = screen.getByTestId("author");
	expect(textElement).toBeInTheDocument();
	expect(textElement).toContainHTML("t2");
})
