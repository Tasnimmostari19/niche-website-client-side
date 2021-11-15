import { Card, CardActionArea, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';


const Review = (props) => {
    console.log(props);
    const { name, number, review } = props.review;



    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {review}
                        </Typography>
                        <Rating name="read-only" value={number} readOnly />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Review;