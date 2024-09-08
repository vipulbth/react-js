import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

const ListSection = ({ index, content, onUpdate }) => {
    const [items, setItems] = useState(content || ['']);

    const handleChange = (event, itemIndex) => {
        const newItems = [...items];
        newItems[itemIndex] = event.target.value;
        setItems(newItems);
        onUpdate(index, newItems);
    };

    const handleAddItem = () => {
        setItems([...items, '']);
    };

    return (
        <Box sx={{ mb: 2 }}>
            {items.map((item, itemIndex) => (
                <TextField
                    key={itemIndex}
                    value={item}
                    onChange={(e) => handleChange(e, itemIndex)}
                    label={`Item ${itemIndex + 1}`}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                />
            ))}
            <Button variant="outlined" onClick={handleAddItem}>
                Add Item
            </Button>
            <ul>
                {items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                ))}
            </ul>
        </Box>
    );
};

export default ListSection;
