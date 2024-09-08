import React, { useState } from 'react';
import { Button, Grid, Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material';
import HeadingSection from '../DiffSections/HeadingSection';
import ImageSection from '../DiffSections/ImageSection';
import ResponsiveImageSection from '../DiffSections/ResponsiveImageSection';
import CodeSection from '../DiffSections/CodeSection';
import QuoteSection from '../DiffSections/QuoteSection';
import ListSection from '../DiffSections/ListSection';
import TableSection from '../DiffSections/TableSection';
import PollSection from '../DiffSections/PollSection';
import CollapsibleSection from '../DiffSections/CollapsibleSection';
import ProgressBarSection from '../DiffSections/ProgressBarSection';
import CarouselGallerySection from '../DiffSections/CarouselGallerySection';
import GridGallerySection from '../DiffSections/GridGallerySection';
import MasonryGallerySection from '../DiffSections/MasonryGallerySection';
import AudioSection from '../DiffSections/AudioSection';
import VideoSection from '../DiffSections/VideoSection';

const BlogEditor = () => {
    const [sections, setSections] = useState([]);
    const [selectedSectionType, setSelectedSectionType] = useState('');

    const addSection = () => {
        if (selectedSectionType) {
            const initialContent = {
                'responsive-image': { imageUrl: '', description: '' },
                'quote': { quote: '', citation: '' },
                'table': { rows: 2, columns: 2, tableData: Array(2).fill(Array(2).fill('')) },
                'poll': { question: '', options: [''] },
                'collapsible': { title: '', text: '' },
                'progress-bar': 0,
                'carousel': [''],
                'gallery': [''],
                'audio': '',
                'video': '',
                'masonry-gallery': [''],
                'code': '',
                'quote': { quote: '', citation: '' },
            };

            setSections([...sections, { type: selectedSectionType, content: initialContent[selectedSectionType] }]);
            setSelectedSectionType('');
        }
    };

    const updateSectionContent = (index, content) => {
        const newSections = [...sections];
        newSections[index].content = content;
        setSections(newSections);
    };

    const handleSubmit = async () => {
        const response = await fetch('/api/blogs/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sections }),
        });
        const result = await response.json();
        if (result.success) {
            alert('Blog post created successfully!');
        }
    };

    const handleRemoveSection = (index) => {
        const newSections = sections.filter((_, i) => i !== index);
        setSections(newSections);
    };

    const renderSection = (section, index) => {
        switch (section.type) {
            case 'heading':
                return <HeadingSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'image':
                return <ImageSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'responsive-image':
                return <ResponsiveImageSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'code':
                return <CodeSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'quote':
                return <QuoteSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'list':
                return <ListSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'table':
                return <TableSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'poll':
                return <PollSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'collapsible':
                return <CollapsibleSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'progress-bar':
                return <ProgressBarSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'carousel':
                return <CarouselGallerySection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'gallery':
                return <GridGallerySection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'masonry-gallery':
                return <MasonryGallerySection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'audio':
                return <AudioSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            case 'video':
                return <VideoSection key={index} index={index} content={section.content} onUpdate={updateSectionContent} />;
            // Handle other section types...
            default:
                return null;
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <h1>Create Blog Post</h1>

            <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="section-type-label">Add Section</InputLabel>
                <Select
                    labelId="section-type-label"
                    value={selectedSectionType}
                    label="Add Section"
                    onChange={(e) => setSelectedSectionType(e.target.value)}
                >
                    <MenuItem value="heading">Heading</MenuItem>
                    <MenuItem value="richtext">Rich Text</MenuItem>
                    <MenuItem value="image">Image</MenuItem>
                    <MenuItem value="responsive-image">Responsive Image</MenuItem>
                    <MenuItem value="code">Code</MenuItem>
                    <MenuItem value="quote">Quote</MenuItem>
                    <MenuItem value="list">List</MenuItem>
                    <MenuItem value="table">Table</MenuItem>
                    <MenuItem value="poll">Poll</MenuItem>
                    <MenuItem value="collapsible">Collapsible</MenuItem>
                    <MenuItem value="progress-bar">Progress Bar</MenuItem>
                    <MenuItem value="carousel">Carousel</MenuItem>
                    <MenuItem value="gallery">Grid Gallery</MenuItem>
                    <MenuItem value="masonry-gallery">Masonry Gallery</MenuItem>
                    <MenuItem value="audio">Audio</MenuItem>
                    <MenuItem value="video">Video</MenuItem>
                    {/* Add other options here */}
                </Select>
            </FormControl>

            <Button
                variant="contained"
                color="primary"
                onClick={addSection}
                disabled={!selectedSectionType}
                sx={{ mb: 3 }}
            >
                Add Section
            </Button>

            <Grid container spacing={2}>
                {sections.map((section, index) => (
                    <Grid item xs={12} key={index}>
                        {renderSection(section, index)}
                        <Button
                            variant="text"
                            color="error"
                            onClick={() => handleRemoveSection(index)}
                            sx={{ mt: 2 }}
                        >
                            Remove Section
                        </Button>
                    </Grid>
                ))}
            </Grid>

            <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
                sx={{ mt: 4 }}
            >
                Publish Blog
            </Button>
        </Box>
    );
};

export default BlogEditor;
