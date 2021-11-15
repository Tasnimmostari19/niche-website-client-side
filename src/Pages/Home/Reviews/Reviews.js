import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://murmuring-basin-44738.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Container>
                <h2>Reviews</h2>


                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Review

                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Grid>
            </Container>

        </div>
    );
};

export default Reviews;