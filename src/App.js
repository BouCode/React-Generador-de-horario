import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import Data from './components/data';
import Header from './components/header';
import Footer from './components/footer';
import { Container, Row, Col } from 'react-bootstrap';
function App() {
	return (
		<div>
			<Header style={{ width: '100%' }} />

			<Container fluid style={{ margin: '100px 0 0 100px' }}>
				<Row>
					<Col sm={3}>
						<Data />
					</Col>
					<Col sm={9}>
						<Main />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
