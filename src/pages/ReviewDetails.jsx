import React from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import ResponseCard from '../components/ResponseCard';
import ReviewCard from '../components/ReviewCard';
import { useReviews } from '../store/ReviewContext';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import ReviewNotFound from './ReviewNotFound';

const ReviewDetails = () => {
    const { reviews } = useReviews();
    const { id } = useParams();
    const review = reviews[id];

    if(id && !review) {
        return (<ReviewNotFound />);
    }

    return (
        <Box
            sx={{
                height: '100vh',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <ReviewCard
                review={review}
                maxWidth="100%"
                width="90%"
                noWrap={false}
                showResponseIcon={false}
            />
            <Box
                sx={{
                    marginTop: '40px',
                    width: "90%"
                }}
            >
                <ResponseCard
                    reviewId={id}
                    maxWidth="100%"
                />
            </Box>
            <Box sx={{ width: '90%', marginTop: '10px', display: 'flex', flexDirection: 'row-reverse', }}>
                <Button variant='contained' color='primary' component={Link} to="/">
                    Back to Review List
                </Button>
            </Box>
        </Box>
    )
}

export default ReviewDetails;