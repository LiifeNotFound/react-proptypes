import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";

function Form(props) {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");
	const [bornDate, setbornDate] = useState("");

	return (
		<form
			onSubmit={(e) => {
				props.send(e, {
					name: name,
					surname: surname,
					age: age,
					bornDate: bornDate,
				});
			}}
		>
			<h1>Enviar dados</h1>
			<input
				placeholder="Nome"
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<input
				placeholder="Apelido"
				type="text"
				value={surname}
				onChange={(e) => setSurname(e.target.value)}
			/>

			<input
				placeholder="Idade"
				type="number"
				value={age}
				onChange={(e) => setAge(e.target.value)}
			/>

			<input
				placeholder="Data de nascimento"
				type="date"
				value={bornDate}
				onChange={(e) => setbornDate(e.target.value)}
			/>

			<button>Enviar</button>
		</form>
	);
}

export default Form;

Form.propTypes = {
	title: PropTypes.number,
};
