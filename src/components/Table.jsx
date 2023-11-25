import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { Link } from "react-router-dom";
const columns = [
	{ field: "id", headerName: "ID", width: 90 },
	{ field: "age", headerName: "Age", width: 150 },
	{ field: "mother", headerName: "Mother", width: 150 },
	{ field: "father", headerName: "Father", width: 110 },
	{ field: "welfare", headerName: "Welfare", width: 160, hide: true },
	{ field: "smoking", headerName: "Smoking", width: 160, hide: true },
	{ field: "drugs", headerName: "Drugs", width: 160, hide: true },
	{ field: "drinking", headerName: "Drinking", width: 160, hide: true },
	{ field: "sex", headerName: "Sex", width: 160 },
	{ field: "result", headerName: "Result", width: 160 },
];

const DataGridDemo = () => {
	const [data, setData] = useState([]);
	const [columnVisibilityModel, setColumnVisibilityModel] = useState({
		id: true,
		age: true,
		welfare: false,
		smoking: false,
		drugs: false,
		drinking: false,
		mother: true,
		father: true,
		sex: true,
		result: true,
	});

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

	const resultCounts = data.reduce((acc, row) => {
		acc[row.result] = (acc[row.result] || 0) + 1;
		return acc;
	}, {});

	const resultChartData = {
		labels: ["Not violenced", "Violenced"],
		datasets: [
			{
				label: "Result Counts",
				data: [resultCounts[0] || 0, resultCounts[1] || 0],
				backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				borderWidth: 1,
			},
		],
	};

	// Data for the second chart (drinking 1 and result 1 count)
	const drinkingResultCount = data.reduce((acc, row) => {
		if (row.drinking === 1 && row.result === 1) {
			acc++;
		}
		return acc;
	}, 0);

	const drinkingChartData = {
		labels: ["Drinking 1 & Result 1"],
		datasets: [
			{
				label: "Count of Drinking 1 with violency in family from 10k",
				data: [drinkingResultCount],
				backgroundColor: ["rgba(153, 102, 255, 0.2)"],
				borderColor: ["rgba(153, 102, 255, 1)"],
				borderWidth: 1,
			},
		],
	};

	return (
		<div style={{ display: "flex", height: 400, gap: "50px" }}>
			<div
				style={{
					flexGrow: 1,
					width: "70%",
					marginBottom: "10px",
				}}
			>
				<DataGrid
					rows={data}
					columns={columns}
					pageSize={5}
					checkboxSelection
					disableRowSelectionOnClick
					components={{
						Toolbar: GridToolbar,
					}}
					columnVisibilityModel={columnVisibilityModel}
					onColumnVisibilityModelChange={(newModel) => {
						setColumnVisibilityModel(newModel);
					}}
				/>
				<div
					style={{
						marginTop: "10px",
					}}
				>
					<Link to="/form">Try to predict</Link>
				</div>
			</div>
			<div style={{ flexGrow: 1, width: "30%" }}>
				<Bar data={resultChartData} options={{ indexAxis: "y" }} />
				<Bar data={drinkingChartData} options={{ indexAxis: "y" }} />
			</div>
		</div>
	);
};

export default DataGridDemo;
