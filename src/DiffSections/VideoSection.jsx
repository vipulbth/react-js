import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

const VideoSection = ({ index, content, onUpdate }) => {
    const [url, setUrl] = useState(content || '');
    const [embedUrl, setEmbedUrl] = useState('');

    const handleChange = (event) => {
        const newUrl = event.target.value;
        setUrl(newUrl);
        onUpdate(index, newUrl);

        // Update the embed URL based on the video URL
        const videoId = extractYouTubeVideoId(newUrl);
        if (videoId) {
            setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
        } else {
            setEmbedUrl('');
        }
    };

    const extractYouTubeVideoId = (url) => {
        const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^"&?\/\s]{11})|(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^"&?\/\s]{11})/);
        return match ? (match[1] || match[2]) : null;
    };

    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                value={url}
                onChange={handleChange}
                label="Enter YouTube video URL"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            {embedUrl && (
                <Box sx={{ height: 400, width: '100%' }}>
                    <iframe
                        src={embedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Video"
                    ></iframe>
                </Box>
            )}
        </Box>
    );
};

export default VideoSection;
