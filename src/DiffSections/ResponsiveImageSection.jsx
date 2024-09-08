import React, { useState } from 'react';
import { TextField, Box, Button, Grid, Typography } from '@mui/material';

const ResponsiveImageSection = ({ index, content, onUpdate }) => {
    const [imageUrl, setImageUrl] = useState(content.imageUrl || '');
    const [description, setDescription] = useState(content.description || '');

    const handleImageUrlChange = (event) => {
        const newImageUrl = event.target.value;
        setImageUrl(newImageUrl);
        onUpdate(index, { ...content, imageUrl: newImageUrl });
    };

    const handleDescriptionChange = (event) => {
        const newDescription = event.target.value;
        setDescription(newDescription);
        onUpdate(index, { ...content, description: newDescription });
    };

    const handleClear = () => {
        setImageUrl('');
        setDescription('');
        onUpdate(index, { imageUrl: '', description: '' });
    };

    return (
        <Box sx={{ mb: 2 }}>
            <Grid container spacing={2}>
                {/* Image and Description layout */}
                <Grid item xs={12} md={4}>
                    <TextField
                        value={imageUrl}
                        onChange={handleImageUrlChange}
                        label="Image URL"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    {imageUrl && (
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <img src={imageUrl} alt="Content" style={{ maxWidth: '100%', height: 'auto' }} />
                        </Box>
                    )}
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextField
                        value={description}
                        onChange={handleDescriptionChange}
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        sx={{ mb: 2 }}
                    />
                </Grid>
            </Grid>
            {imageUrl && (
                <Button variant="text" color="error" onClick={handleClear}>
                    Remove Section
                </Button>
            )}
        </Box>
    );
};

export default ResponsiveImageSection;
