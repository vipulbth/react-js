import React, { useState } from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';

const CarouselGallerySection = ({ index, content, onUpdate }) => {
    const [images, setImages] = useState(content || ['']);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (event, imageIndex) => {
        const newImages = [...images];
        newImages[imageIndex] = event.target.value;
        setImages(newImages);
        onUpdate(index, newImages);
    };

    const handleAddImage = () => {
        setImages([...images, '']);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(images.length - 1, prevIndex + 1));
    };

    return (
        <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Button onClick={handlePrev} disabled={currentIndex === 0}>
                    Previous
                </Button>
                <Box sx={{ flex: 1 }}>
                    {images.length > 0 && (
                        <img
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    )}
                    {images.length === 0 && (
                        <Typography variant="body2" color="textSecondary">
                            No images available
                        </Typography>
                    )}
                </Box>
                <Button onClick={handleNext} disabled={currentIndex === images.length - 1}>
                    Next
                </Button>
            </Box>
            {images.map((image, imageIndex) => (
                <TextField
                    key={imageIndex}
                    value={image}
                    onChange={(e) => handleChange(e, imageIndex)}
                    label={`Image ${imageIndex + 1} URL`}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                />
            ))}
            <Button variant="outlined" onClick={handleAddImage}>
                Add Image
            </Button>
        </Box>
    );
};

export default CarouselGallerySection;
