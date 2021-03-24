import React from "react";
import "./IdCard.css";
import PropTypes from "prop-types";

function IdCard(props) {
	return (
		<div className="card-container">
			<div className="card">
				<h1>Nome: {props.user.name}</h1>
				<h1>Apelido: {props.user.surname}</h1>
				<h1>Idade: {props.user.age}</h1>
				<h1>Data de nascimento: {props.user.bornDate}</h1>
			</div>
		</div>
	);
}

export default IdCard;

IdCard.propTypes = {

}