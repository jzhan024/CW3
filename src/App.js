import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootswatch/dist/litera/bootstrap.min.css';
import 'cc/assets/fontawesome/js/all.min.js';
import 'cc/assets/plugins/flickity/flickity.min.css';
import 'cc/assets/css/theme.css';
import FirstPage from './pages/firstpage/FirstPage';
import { useState } from 'react';
import Questionnair from './pages/questionnair/Questionnair';

function App() {
	const [page, setPage] = useState(false);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<FirstPage />} />
				<Route path="qn" element={<Questionnair />} />
				</Routes>
		</div>
	);
}


export default App;
