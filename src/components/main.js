import React from 'react';
import { Table, Container } from 'react-bootstrap';

const arr = [];
const col = [];
export function SelectItem(event, text, course) {
	if (text !== null && course !== null && event === '') {
		arr.push(text);
		col.push(course);
	} else {
		if (arr == null) {
		}
		arr.map((value, index) => {
			event.target.textContent = arr[index];
			event.target.style.backgroundColor = col[index];
		});
	}
}

function buttonDelete(event) {
	event.target.textContent = '';
	event.target.style.backgroundColor = '';
}

function zfill(number, width) {
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
}

const Main = () => {
	const days = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ];
	const arr = [];
	const times = () => {
		for (let i = 0; i < 24; i++) {
			for (let j = 0; j < 1; j++) {
				arr.push([ `${zfill(i, 2)}:${zfill(j * 50, 2)} - ${zfill(i, 2)}:${zfill(j + 1 * 50, 2)}` ]);
			}
		}
	};

	times();

	const listTime = arr.map((time, index) => (
		<tr key={index}>
			<td key={index}>{time}</td>
			{days.map((day, ind) => <td key={ind} onClick={SelectItem} onDoubleClick={buttonDelete} />)}
		</tr>
	));
	const listItem = days.map((day, index) => <th key={index}>{day}</th>);

	return (
		<div>
			<Container>
				<Table borderless striped hover responsive="sm" variant="dark" className="text-center" size="sm">
					<thead>
						<tr>
							<th>Horas</th>
							{listItem}
						</tr>
					</thead>
					<tbody>{listTime}</tbody>
				</Table>
			</Container>
		</div>
	);
};

export default Main;
