import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Papa from 'papaparse';
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'age', headerName: 'Age', width: 150 },
    { field: 'mother', headerName: 'Mother', width: 150 },
    { field: 'father', headerName: 'Father', type: 'number', width: 110 },
    { field: 'sex', headerName: 'Sex', width: 160 },
    { field: 'welfare', headerName: 'Welfare', width: 160 },
    { field: 'smoking', headerName: 'Smoking', width: 160 },
    { field: 'drugs', headerName: 'Drugs', width: 160 },
    { field: 'drinking', headerName: 'Drinking', width: 160 },
    { field: 'result', headerName: 'Result', width: 160 },
];




const DataGridDemo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/csvdata')  // Replace 'yourfile.csv' with the path to your CSV file in the public folder
            .then(response => response.text())
            .then(csvString => {
                Papa.parse(csvString, {
                    header: true,
                    complete: (results) => {
                        const rowsWithIds = results.data.map((row, index) => ({
                            id: index, // Assigning a unique ID
                            ...row
                        }));
                        setData(rowsWithIds);
                    }
                });
            });
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
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
