import React, { useState } from "react";
function MyForm() {
	// States for checkboxes

	const containerStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
	};

	const formStyle = {
		display: "flex",
		flexDirection: "column",
		width: "300px",
		padding: "20px",
		border: "1px solid #ccc",
		borderRadius: "10px",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
	};

	const [checkbox1, setCheckbox1] = useState(false);
	const [checkbox2, setCheckbox2] = useState(false);
	const [checkbox3, setCheckbox3] = useState(false);
	const [checkbox4, setCheckbox4] = useState(false);
	const [checkbox5, setCheckbox5] = useState(false);

	// States for dropdowns
	const [dropdown1, setDropdown1] = useState("");
	const [dropdown2, setDropdown2] = useState("");

	// Additional field (e.g. a text input)
	const [additionalField, setAdditionalField] = useState("");

	// Handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = {
			checkbox1,
			checkbox2,
			checkbox3,
			checkbox4,
			checkbox5,
			dropdown1,
			dropdown2,
			additionalField,
		};
		console.log(formData);
		// Process formData as needed
	};

	return (
		<div style={containerStyle}>
			<form onSubmit={handleSubmit} style={formStyle}>
				<label style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
					Age:
					<input
						type="text"
						value={additionalField}
						onChange={(e) => setAdditionalField(e.target.value)}
						style={{ paddingBlock: "0", paddingInline: "0", borderColor: "0", borderWidth: "0", borderRadius: "5px", outline: "none" }} />
				</label>
				<label style={{ marginBottom: "10px" }}>
					Gender
					<select
						value={dropdown1}
						onChange={(e) => setDropdown1(e.target.value)}
					>
						<option value="">Select an Option</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</label>
				<label style={{ marginBottom: "10px" }}>
					Does child has mother?
					<input
						type="checkbox"
						checked={checkbox1}
						onChange={(e) => setCheckbox1(e.target.checked)}
					/>
				</label>
				<label style={{ marginBottom: "10px" }}>
					Does child has Father?
					<input
						type="checkbox"
						checked={checkbox2}
						onChange={(e) => setCheckbox2(e.target.checked)}
					/>
				</label>
				<label style={{ marginBottom: "10px" }}>
					Does any of parents smokes?
					<input
						type="checkbox"
						checked={checkbox3}
						onChange={(e) => setCheckbox3(e.target.checked)}
					/>
				</label>
				<label style={{ marginBottom: "10px" }}>
					Does any of parents drinks spirits?
					<input
						type="checkbox"
						checked={checkbox4}
						onChange={(e) => setCheckbox4(e.target.checked)}
					/>
				</label>

				<label style={{ marginBottom: "10px" }}>
					Does any of parents do drugs?
					<input
						type="checkbox"
						checked={checkbox5}
						onChange={(e) => setCheckbox5(e.target.checked)}
					/>
				</label>

				<label style={{ marginBottom: "10px" }}>
					Welfare
					<select
						value={dropdown2}
						onChange={(e) => setDropdown2(e.target.value)}
					>
						<option value="">Select an Option</option>
						<option value="low">low</option>
						<option value="medium">medium</option>
						<option value="high">high</option>
					</select>
				</label>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default MyForm;
