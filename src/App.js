import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import IdCard from "./components/IdCard";

function App() {
	const [user, setUser] = useState({});

	const send = (e, data) => {
		e.preventDefault();
		setUser(data);
	};

	return (
		<div className="App">
			<Form send={send} />
			<IdCard user={user} />
		</div>
	);
}

export default App;
