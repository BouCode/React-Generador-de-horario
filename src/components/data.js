import React, { useState } from 'react';
import { Card, InputGroup, Button, FormControl } from 'react-bootstrap';

const Data = () => {
	const inputStyle = {
		height: '100%',
		border: 'none',
		padding: '0px'
	};

	const [ arrCourse, setArrCourse ] = useState([]);
	const [ arrColor, setArrColor ] = useState([]);
	const [ course, setCourse ] = useState('');
	const [ color, setColor ] = useState('');
	function courseCapture({ target }) {
		setCourse(target.value);
	}

	function colorCapture(e) {
		const evento = e.target.value;
		setColor(evento);
	}

	function buttonEffect() {
		setArrCourse((arrCourse) => [ ...arrCourse, course ]);
		setArrColor((arrColor) => [ ...arrColor, color ]);
		console.log(arrCourse);
	}
	const Visuacourse = ({ course }) => <li>{course}</li>;
	const Visuacolor = ({ color }) => <li>{color}</li>;
	return (
		<div>
			<Card border="success" style={{ width: '20rem' }}>
				<Card.Header>Curso</Card.Header>
				<Card.Body>
					<Card.Title>Inserte su curso:</Card.Title>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Curso"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
							onChange={courseCapture}
						/>
						<InputGroup.Append>
							<Button variant="outline-secondary" style={{ padding: '0px' }}>
								<input type="color" style={inputStyle} onChange={colorCapture} />
							</Button>
						</InputGroup.Append>
					</InputGroup>
					<Button variant="primary" onClick={buttonEffect}>
						Agregar
					</Button>
					<Card.Text>
						<ul>
							{arrCourse.map((course, i) => <Visuacourse course={course} key={course + i} />)}

							{arrColor.map((color, i) => <Visuacolor color={color} key={color + i} />)}
						</ul>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Data;
