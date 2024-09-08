import React, { useState } from 'react';
import { TextField, Box, Grid, Button } from '@mui/material';

const GridGallerySection = ({ index, content, onUpdate }) => {
    const [images, setImages] = useState(content || ['']);

    const handleChange = (event, imageIndex) => {
        const newImages = [...images];
        newImages[imageIndex] = event.target.value;
        setImages(newImages);
        onUpdate(index, newImages);
    };

    const handleAddImage = () => {
        setImages([...images, '']);
    };

    return (
        <Box sx={{ mb: 2 }}>
            <Grid container spacing={2}>
                {images.map((image, imageIndex) => (
                    <Grid item xs={12} sm={6} md={4} key={imageIndex}>
                        <TextField
                            value={image}
                            onChange={(e) => handleChange(e, imageIndex)}
                            label={`Image ${imageIndex + 1} URL`}
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        {image && <img src={image} alt={`Gallery Item ${imageIndex + 1}`} style={{ width: '100%', height: 'auto' }} />}
                    </Grid>
                ))}
            </Grid>
            <Button variant="outlined" onClick={handleAddImage}>
                Add Image
            </Button>
        </Box>
    );
};

export default GridGallerySection;
