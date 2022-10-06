import { Box } from "@mui/material";
import React from "react";
import ReviewCard from "../components/ReviewCard";
import { useReviews } from "../store/ReviewContext";

const ReviewList = () => {
    const { reviews } = useReviews();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}
        >
            {
                Object.values(reviews).map(review => (
                    <Box key={review.id} sx={{ padding: '15px 30px 30px 30px' }}>
                        <ReviewCard review={review} clickable/>
                    </Box>
                ))
            }
        </Box>
    )
}

export default ReviewList;