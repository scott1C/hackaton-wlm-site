import React, { useState } from "react";

function MyForm() {
	const [formData, setFormData] = useState({
		check1: false,
		check2: false,
		check3: false,
		check4: false,
		check5: false,
		dropdown1: "",
		dropdown2: "",
	});

	const handleInputChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Process the formData
		console.log(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="checkbox"
				name="check1"
				checked={formData.check1}
				onChange={handleInputChange}
			/>
			{/* Repeat for other checkboxes */}

			<select
				name="dropdown1"
				value={formData.dropdown1}
				onChange={handleInputChange}
			>
				{/* Add options here */}
			</select>
			{/* Repeat for other dropdown */}

			<button type="submit">Submit</button>
		</form>
	);
}

export default MyForm;
