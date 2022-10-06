import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const ReviewCardContent = ({ review, noWrap, showResponseIcon }) => (
    <CardContent>
        <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} component="div">
            {review.place}
        </Typography>
        <Rating name={review.id} value={review.rating} readOnly />
        <Typography noWrap={noWrap} sx={{ opacity: '70%' }} variant="body2">
            {review.content}
        </Typography>
        <Box
            sx={{
                marginTop: '60px',
                display: 'flex',
                flexDirection: 'row',
                minWidth: 250
            }}
        >
            <Typography variant='body2' noWrap>
                {review.author}
            </Typography>
            <Typography ml={3} variant='body2' sx={{ opacity: '50%' }}>
                {new Date(review.published_at).toLocaleDateString()}
            </Typography>
            {
                showResponseIcon && review.response && (
                    <Box sx={{ marginLeft: '100px' }}>
                        <QuestionAnswerIcon color="primary" />
                    </Box>
                )
            }
        </Box>
    </CardContent>
);

export default ReviewCardContent;
