import React from 'react';
import { Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const days = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ];
	const arr = [];
	const times = () => {
		for (let i = 6; i < 24; i++) {
			for (let j = 0; j < 1; j++) {
				arr.push([ `${zfill(i, 2)}:${zfill(j * 50, 2)} - ${zfill(i, 2)}:${zfill(j + 1 * 50, 2)}` ]);
			}
		}
	};

	const zfill = (number, width) => {
		var numberOutput = Math.abs(number);
		var length = number.toString().length;
		var zero = '0';

		if (width <= length) {
			if (number < 0) {
				return '-' + numberOutput.toString();
			} else {
				return numberOutput.toString();
			}
		} else {
			if (number < 0) {
				return '-' + zero.repeat(width - length) + numberOutput.toString();
			} else {
				return zero.repeat(width - length) + numberOutput.toString();
			}
		}
	};

	times();
	const listTime = arr.map((time, index) => (
		<tr key={index}>
			<td key={index}>{time}</td>
			{days.map((day, ind) => <td key={ind}>{day}</td>)}
		</tr>
	));
	const listItem = days.map((day) => <th key={day}>{day}</th>);
	return (
		<div>
			<Container>
				<Table bordered hover size responsive="sm">
					<thead>
						<tr>
							<th>Horario</th>
							{listItem}
						</tr>
					</thead>
					<tbody>{listTime}</tbody>
				</Table>
			</Container>
		</div>
	);
}

export default App;
