import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{ field: "id", headerName: "ID", width: 90 },
	{ field: "age", headerName: "Age", width: 150 },
	{ field: "mother", headerName: "Mother", width: 150 },
	{ field: "father", headerName: "Father", width: 110 },
	{ field: "sex", headerName: "Sex", width: 160 },
	{ field: "result", headerName: "Result", width: 160 },
];

const DataGridDemo = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/api/csvdata") // Replace with your API endpoint
			.then((response) => response.json()) // Assuming the API returns JSON data
			.then((jsonData) => {
				const rowsWithIds = jsonData.map((row, index) => ({
					id: index + 1, // Assigning a unique ID
					...row,
				}));
				setData(rowsWithIds);
			});
	}, []);

	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={5}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</div>
	);
};

export default DataGridDemo;
