import { useState } from "react";

const Radio = () => {
	const [drone, setDrone] = useState("");

	const handleChange = (e) => {
		setDrone(e.target.value);
	};

	return (
		<fieldset>
			<legend>Select a maintenance drone: {drone}</legend>

			<div>
				<input
					type="radio"
					id="huey"
					name="drone"
					value="Huey"
					onChange={handleChange}
				/>
				<label htmlFor="huey">Huey</label>
			</div>

			<div>
				<input
					type="radio"
					id="dewey"
					name="drone"
					value="Dewey"
					onChange={handleChange}
				/>
				<label htmlFor="dewey">Dewey</label>
			</div>

			<div>
				<input
					type="radio"
					id="louie"
					name="drone"
					value="Louie"
					onChange={handleChange}
				/>
				<label htmlFor="louie">Louie</label>
			</div>
		</fieldset>
	);
};

export default Radio;