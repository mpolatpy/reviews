import { Box, Typography } from '@mui/material';
import React from 'react';

const Header = ({ headerText }) => (
    <Box
        sx={{
            backgroundColor: '#1976d2',
            color: 'white',
            p: 1,
            height: '50px'
        }}
    >
        <Typography
            variant='h5'
            sx={{
                ml: 15,
                fontWeight: 'bold'
            }}
        >
            {headerText}
        </Typography>
    </Box>
);

export default Header;