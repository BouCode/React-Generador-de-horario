import React, { useState, useEffect } from 'react';
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
	function courseCapture(e) {
		const evento = e.target.value;
		setCourse(evento);
	}

	function colorCapture(e) {
		const evento = e.target.value;
		setColor(evento);
	}

	function buttonEffect() {
		setArrCourse(arrCourse.concat(course));
		setArrColor(arrCourse.concat(color));
		console.log(arrCourse);
	}
	const visuaCourse = arrCourse.map((value, index) => <li key={index}>{value}</li>);
	const visuaColor = arrColor.map((value, index) => <p key={index}>{value}</p>);
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
					<Card.Text style={{ color: color }}>
						{course} {color}
						{visuaCourse} {visuaColor}
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Data;
