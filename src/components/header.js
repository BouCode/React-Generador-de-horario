import React from 'react';
import { Navbar, ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';
const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">HORARIO</Navbar.Brand>
			<Navbar.Collapse className="justify-content-end">
				<ButtonGroup aria-label="Basic example">
					<Button variant="dark">Nuevo Horario</Button>
					<DropdownButton variant="dark" title="Guardar como ...">
						<Dropdown.Item eventKey="1">Hoja de cálculo</Dropdown.Item>
						<Dropdown.Item eventKey="2">PDF</Dropdown.Item>
					</DropdownButton>
				</ButtonGroup>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
