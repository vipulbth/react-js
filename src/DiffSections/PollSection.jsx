import React, { useState } from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';

const PollSection = ({ index, content, onUpdate }) => {
    const [question, setQuestion] = useState(content.question || '');
    const [options, setOptions] = useState(content.options || ['']);

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
        onUpdate(index, { question, options });
    };

    const handleOptionChange = (event, optionIndex) => {
        const newOptions = [...options];
        newOptions[optionIndex] = event.target.value;
        setOptions(newOptions);
        onUpdate(index, { question, options: newOptions });
    };

    const handleAddOption = () => {
        setOptions([...options, '']);
    };

    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                value={question}
                onChange={handleQuestionChange}
                label="Poll Question"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            {options.map((option, optionIndex) => (
                <TextField
                    key={optionIndex}
                    value={option}
                    onChange={(e) => handleOptionChange(e, optionIndex)}
                    label={`Option ${optionIndex + 1}`}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                />
            ))}
            <Button variant="outlined" onClick={handleAddOption}>
                Add Option
            </Button>
            <Box>
                <Typography variant="h6">{question}</Typography>
                <ul>
                    {options.map((option, optionIndex) => (
                        <li key={optionIndex}>{option}</li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
};

export default PollSection;
