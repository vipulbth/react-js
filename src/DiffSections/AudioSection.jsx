import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

const AudioSection = ({ index, content, onUpdate }) => {
    const [url, setUrl] = useState(content || '');

    const handleChange = (event) => {
        const newUrl = event.target.value;
        setUrl(newUrl);
        onUpdate(index, newUrl);
    };

    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                value={url}
                onChange={handleChange}
                label="Enter audio URL"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            {url && (
                <Box>
                    <Typography variant="body2" color="textSecondary">
                        Playing:
                    </Typography>
                    <audio controls>
                        <source src={url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </Box>
            )}
        </Box>
    );
};

export default AudioSection;
