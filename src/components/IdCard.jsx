import React from "react";
import "./IdCard.css";
import PropTypes from "prop-types";

function IdCard(props) {
	const user = props.user;

	return (
		<div className="card-container">
			<div className="card">
				<h1>Nome: {user.name}</h1>
				<h1>Apelido: {user.surname}</h1>
				<h1>Idade: {user.age}</h1>
				<h1>
					Data de nascimento:{" "}
					{props.user.bornDate}
				</h1>
			</div>
		</div>
	);
}

export default IdCard;

//TODO: Debug

// IdCard.propTypes = {
//	user: React.PropTypes.shape({
//		name: React.PropTypes.string,
//		apelido: React.PropTypes.number,
//	})
//};
