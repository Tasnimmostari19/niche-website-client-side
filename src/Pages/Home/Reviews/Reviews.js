import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <h2>Reviews</h2>

            {
                reviews.map(review => <Review

                    key={review._id}
                    review={review}
                ></Review>)
            }

        </div>
    );
};

export default Reviews;