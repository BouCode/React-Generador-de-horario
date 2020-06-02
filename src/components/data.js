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
		console.log(arrColor);
	}
	// const VisuaCourse = ({ course }, { color }) => (
	// 	<p>
	// 		{course} {color}
	// 	</p>
	// );

	const VisuaData = arrCourse.map((value, index) => (
		<p key={index}>
			{value} {arrColor[index]}
		</p>
	));
	// const Visuacolor = ({ color }) => <p>{color}</p>;
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
					<ul>
						{/* {arrCourse.map((course, i) => <VisuaCourse course={course} color={color} key={course + i} />)} */}
						{/* {arrColor.map((color, i) => <Visuacolor color={color} key={course} />)} */}
						{VisuaData}
					</ul>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Data;
