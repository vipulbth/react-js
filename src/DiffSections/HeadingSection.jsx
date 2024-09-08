import React from 'react';
import { TextField, Box } from '@mui/material';

const HeadingSection = ({ index, content, onUpdate }) => {
    const handleChange = (event) => {
        onUpdate(index, event.target.value);
    };

    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                value={content}
                onChange={handleChange}
                label="Enter heading..."
                variant="outlined"
                fullWidth
                InputProps={{
                    style: {
                        minHeight: '100px',
                    },
                }}
            />
        </Box>
    );
};

export default HeadingSection;
