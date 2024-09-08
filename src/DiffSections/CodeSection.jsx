import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

const CodeSection = ({ index, content, onUpdate }) => {
    const [code, setCode] = useState(content);

    const handleChange = (event) => {
        const newCode = event.target.value;
        setCode(newCode);
        onUpdate(index, newCode);
    };

    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                value={code}
                onChange={handleChange}
                label="Enter code..."
                multiline
                rows={10}
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
        </Box>
    );
};

export default CodeSection;
