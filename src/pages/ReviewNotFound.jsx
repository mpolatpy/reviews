import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ReviewNotFound = () => (
    <Box
        sx={{
            height: '100vh',
            color: 'white'
        }}
    >
        <h3>The review you are looking for does not exist.</h3>
        <Button component={Link} to="/" variant="contained">Go back to Home Page</Button>
    </Box>
);

export default ReviewNotFound;