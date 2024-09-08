import React, { useState } from 'react';
import { TextField, Box, Typography, LinearProgress } from '@mui/material';

const ProgressBarSection = ({ index, content, onUpdate }) => {
    const [progress, setProgress] = useState(content || 0);

    const handleChange = (event) => {
        const newProgress = Math.min(100, Math.max(0, parseInt(event.target.value, 10)));
        setProgress(newProgress);
        onUpdate(index, newProgress);
    };

    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                type="number"
                value={progress}
                onChange={handleChange}
                label="Progress (%)"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            <LinearProgress variant="determinate" value={progress} />
            <Typography variant="body2" color="textSecondary">
                {progress}%
            </Typography>
        </Box>
    );
};

export default ProgressBarSection;
