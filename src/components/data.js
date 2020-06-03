import React, { useState } from 'react';
import { Card, InputGroup, Button, FormControl } from 'react-bootstrap';
import { SelectItem } from './main';
const Data = () => {
	const inputStyle = {
		height: '100%',
		border: 'none',
		padding: '0px'
	};

	const [ arrCourse, setArrCourse ] = useState([ 'Geometria', 'Trigonometria', 'Fisica' ]);
	const [ arrColor, setArrColor ] = useState([ '#D89D6A', '#DD1C1A', '#06AED5' ]);
	const [ course, setCourse ] = useState('');
	const [ color, setColor ] = useState('');
	function courseCapture({ target }) {
		setCourse(target.value);
	}

	function colorCapture(e) {
		const evento = e.target.value;
		setColor(evento);
	}

	function buttonAdd() {
		setArrCourse((arrCourse) => [ ...arrCourse, course ]);
		setArrColor((arrColor) => [ ...arrColor, color ]);
	}

	function buttonCourse(event) {
		const target = event.target;
		const TextContent = target.textContent;
		const ColorContent = target.style.backgroundColor;
		// console.log(TextContent);
		// console.log(ColorContent);
		SelectItem('', TextContent, ColorContent);
	}

	function buttonDelete(event) {
		console.log('Boton borrado');
		const TextContent = event.target.textContent;
		for (let i = 0; i < arrCourse.length; i++) {
			if (arrCourse[i] === TextContent) {
				arrCourse.splice(i, 1);
				arrColor.splice(i, 1);
				console.log(arrColor);
				console.log(arrCourse);
				setArrCourse(arrCourse);
				setArrColor(arrColor);
				event.target.textContent = '';
			}
		}

		// console.log(arrColor);
		// console.log(arrCourse);
	}

	const VisuaData = arrCourse.map((value, index) => (
		<button
			key={index}
			style={{
				background: `${arrColor[index]}`,
				border: 'none',
				color: 'white',
				width: 'auto',
				borderRadius: '10px',
				margin: '5px 5px 0px 0px',
				cursor: 'pointer'
			}}
			onClick={buttonCourse}
			onDoubleClick={buttonDelete}
		>
			{value}
		</button>
	));

	return (
		<div>
			<Card bg="dark" text="white">
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
					<Button variant="primary" onClick={buttonAdd}>
						Agregar
					</Button>
					{/* <SelectItem value="Probando" /> */}

					<ul style={{ padding: '0px' }}>{VisuaData}</ul>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Data;
