import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

import Quote from "./pages/quote";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/quote" element={<Quote/>}/>
			</Routes>
		</BrowserRouter>
	);
}

const Home = () => {
	return (
		<div>Teste</div>
	)
};

export default App;
