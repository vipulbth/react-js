import React, { useState } from 'react';
import { TextField, Box, Button, Collapse, Typography } from '@mui/material';

const CollapsibleSection = ({ index, content, onUpdate }) => {
    const [title, setTitle] = useState(content.title || '');
    const [text, setText] = useState(content.text || '');
    const [isOpen, setIsOpen] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        onUpdate(index, { title, text });
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
        onUpdate(index, { title, text });
    };

    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                value={title}
                onChange={handleTitleChange}
                label="Section Title"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            <Button
                variant="outlined"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Collapse' : 'Expand'}
            </Button>
            <Collapse in={isOpen}>
                <TextField
                    value={text}
                    onChange={handleTextChange}
                    label="Content"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                />
            </Collapse>
            {isOpen && <Typography variant="body1">{text}</Typography>}
        </Box>
    );
};

export default CollapsibleSection;
