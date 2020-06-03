import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
	return (
		<div style={{ position: 'fixed', bottom: '0px', width: '100%' }}>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand>©</Navbar.Brand>
			</Navbar>
		</div>
	);
};

export default Footer;
