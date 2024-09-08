import React, { useState } from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';
import Masonry from 'react-masonry-css';

const MasonryGallerySection = ({ index, content, onUpdate }) => {
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
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Gallery
            </Typography>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                style={{ margin: 0 }}
            >
                {images.map((image, imageIndex) => (
                    <Box
                        key={imageIndex}
                        sx={{
                            mb: 2,
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <img
                            src={image}
                            alt={`Gallery Item ${imageIndex + 1}`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                objectFit: 'cover'
                            }}
                        />
                        <TextField
                            value={image}
                            onChange={(e) => handleChange(e, imageIndex)}
                            label={`Image ${imageIndex + 1} URL`}
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 2 }}
                        />
                    </Box>
                ))}
            </Masonry>
            <Button
                variant="outlined"
                onClick={handleAddImage}
                sx={{ mt: 2 }}
            >
                Add Image
            </Button>
        </Box>
    );
};

export default MasonryGallerySection;
