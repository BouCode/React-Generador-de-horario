import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
	return (
		<div style={{ position: 'relative', bottom: '0px', width: '100%', paddingTop: '50px' }}>
			<Navbar bg="dark" variant="dark">
				<Navbar.Text className="center">©Derechos reservados 2020</Navbar.Text>
			</Navbar>
		</div>
	);
};

export default Footer;
