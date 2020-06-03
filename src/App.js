import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import Data from './components/data';
import Header from './components/header';
function App() {
	return (
		<div>
			<Header />
			<Data />
			<Main />
		</div>
	);
}

export default App;
