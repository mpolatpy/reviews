import React, { useState } from "react";
import MoreActionsButton from "./MoreActionsButton";
import Card from "@mui/material/Card";
import ReplyIcon from '@mui/icons-material/Reply';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { useReviews, useReviewsDispatch } from "../store/ReviewContext";
import { ReviewActionTypes } from "../store/ActionTypes";

const ResponseCard = ({ maxWidth, reviewId }) => {
    const dispatch = useReviewsDispatch();
    const { reviews } = useReviews();
    const review = reviews[reviewId];
    const [isEditing, setIsEditing] = useState(!review.response);
    const [responseText, setResponseText] = useState(review.response?.text ?? '');

    const menuItems = [
        {
            text: 'Edit',
            handleAction: () => setIsEditing(true)
        },
        {
            text: 'Delete',
            handleAction: () => {
                dispatch({
                    type: ReviewActionTypes.DELETE_RESPONSE,
                    payload: {
                        id: reviewId
                    }
                });

                setResponseText('');
                setIsEditing(true);
            }
        },
    ];

    const handleSaveResponse = () => {
        dispatch({
            type: ReviewActionTypes.UPDATE_RESPONSE,
            payload: {
                id: reviewId,
                response: {
                    author: 'Current User',
                    published_at: new Date().toString(),
                    text: responseText
                }
            }
        });
        setIsEditing(false);
    }

    return (
        <Card sx={{ maxWidth: maxWidth, minWidth: 300, borderRadius: '1px', p: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Box sx={{ marginRight: '10px' }}>
                    <Tooltip title="Save Response">
                        <span>
                            <IconButton
                                size="large"
                                disabled={!isEditing || responseText.length === 0}
                                p={1}
                                onClick={handleSaveResponse}
                            >
                                <ReplyIcon fontSize="large" color="primary" />
                            </IconButton>
                        </span>
                    </Tooltip>
                </Box>
                <Box
                    sx={{
                        margin: '0 10px',
                        width: '90%',
                    }}
                >
                    {
                        isEditing ? (
                            <TextField
                                multiline
                                minRows={2}
                                sx={{ marginTop: '10px' }}
                                fullWidth
                                value={responseText}
                                size="small"
                                placeholder="Enter your response here"
                                onChange={(e) => setResponseText(e.target.value)}
                            />
                        ) : (
                            <Typography sx={{ marginTop: '20px' }} variant="body2">
                                {review.response?.text ?? ''}
                            </Typography>
                        )
                    }
                </Box>
                <MoreActionsButton menuItems={menuItems} />
            </Box>
            {
                review.response && (
                    <Box
                        sx={{
                            marginTop: '30px',
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <Typography variant='body2'>
                            {review.response.author}
                        </Typography>
                        <Typography ml={3} variant='body2' sx={{ opacity: '50%' }}>
                            {new Date(review.response.published_at).toLocaleDateString()}
                        </Typography>
                    </Box>
                )
            }
        </Card>
    )
}

export default ResponseCard;