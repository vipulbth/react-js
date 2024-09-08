import React, { useState } from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';

const ImageSection = ({ index, content, onUpdate }) => {
    const [url, setUrl] = useState(content);

    const handleChange = (event) => {
        const newUrl = event.target.value;
        setUrl(newUrl);
        onUpdate(index, newUrl);
    };

    const handleClear = () => {
        setUrl('');
        onUpdate(index, '');
    };

    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                value={url}
                onChange={handleChange}
                label="Enter image URL..."
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            {url ? (
                <Box display={"flex"} alignItems={'center'} justifyContent={"center"} >
                    <img src={url} alt="Content" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Button variant="text" color="error" onClick={handleClear}>
                        Remove Image
                    </Button>
                </Box>
            ) : (
                <Typography variant="body2" color="textSecondary">
                    No image uploaded
                </Typography>
            )}
        </Box>
    );
};

export default ImageSection;
