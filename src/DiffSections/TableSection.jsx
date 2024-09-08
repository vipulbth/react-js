import React, { useState } from 'react';
import { TextField, Box, Button, Grid } from '@mui/material';

const TableSection = ({ index, content, onUpdate }) => {
    const [rows, setRows] = useState(content.rows || 2);
    const [columns, setColumns] = useState(content.columns || 2);
    const [tableData, setTableData] = useState(content.tableData || Array(rows).fill(Array(columns).fill('')));

    const handleChange = (rowIndex, colIndex, value) => {
        const newTableData = tableData.map((row, rIdx) =>
            rIdx === rowIndex ? row.map((cell, cIdx) => (cIdx === colIndex ? value : cell)) : row
        );
        setTableData(newTableData);
        onUpdate(index, { rows, columns, tableData: newTableData });
    };

    const handleRowsChange = (event) => {
        const newRows = parseInt(event.target.value, 10);
        setRows(newRows);
        setTableData(prev => {
            const newTableData = Array(newRows).fill(Array(columns).fill(''));
            return newTableData.map((row, rIdx) => row.map((cell, cIdx) => (prev[rIdx] ? prev[rIdx][cIdx] : '')));
        });
    };

    const handleColumnsChange = (event) => {
        const newColumns = parseInt(event.target.value, 10);
        setColumns(newColumns);
        setTableData(prev => prev.map(row => row.concat(Array(newColumns - row.length).fill(''))));
    };

    return (
        <Box sx={{ mb: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        type="number"
                        value={rows}
                        onChange={handleRowsChange}
                        label="Rows"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        type="number"
                        value={columns}
                        onChange={handleColumnsChange}
                        label="Columns"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                </Grid>
            </Grid>
            <table border="1">
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex}>
                                    <TextField
                                        value={cell}
                                        onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    );
};

export default TableSection;
