import React, { useState } from 'react';
import { TextField, Box, Typography, Button } from '@mui/material';

const QuoteSection = ({ index, content, onUpdate }) => {
    const [quote, setQuote] = useState(content.quote || '');
    const [citation, setCitation] = useState(content.citation || '');

    const handleQuoteChange = (event) => {
        setQuote(event.target.value);
        onUpdate(index, { quote, citation });
    };

    const handleCitationChange = (event) => {
        setCitation(event.target.value);
        onUpdate(index, { quote, citation });
    };

    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                value={quote}
                onChange={handleQuoteChange}
                label="Enter quote..."
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                value={citation}
                onChange={handleCitationChange}
                label="Enter citation..."
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            {quote && (
                <Box>
                    <Typography variant="h6" component="blockquote">
                        "{quote}"
                    </Typography>
                    {citation && <Typography variant="body2" color="textSecondary">- {citation}</Typography>}
                </Box>
            )}
        </Box>
    );
};

export default QuoteSection;
