import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { useHistory } from 'react-router-dom';
import ReviewCardContent from './ReviewCardContent';

const ReviewCard = ({ review, maxWidth = 345, noWrap = true, showResponseIcon = true, width, clickable = false }) => {
    const history = useHistory();

    return (
        <Card sx={{ maxWidth, minWidth: 300, borderRadius: '1px', width }}>
            {
                clickable ? (
                    <CardActionArea onClick={() => history.push(`/reviews/${review.id}`)}>
                        <ReviewCardContent
                            review={review}
                            noWrap={noWrap}
                            showResponseIcon={showResponseIcon}
                        />
                    </CardActionArea>
                ) : (
                    <ReviewCardContent
                        review={review}
                        noWrap={noWrap}
                        showResponseIcon={showResponseIcon}
                    />
                )
            }
        </Card>
    );
}

export default ReviewCard;
