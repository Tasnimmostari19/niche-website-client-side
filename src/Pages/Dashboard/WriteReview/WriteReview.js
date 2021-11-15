import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React, { useState } from 'react';


const WriteReview = () => {
    const [review, setReview] = useState({})

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newReview = { ...review }
        newReview[field] = value;
        console.log(newReview);
        setReview(newReview);

    }

    const handleSubmit = e => {

        fetch(`https://murmuring-basin-44738.herokuapp.com/review`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(review)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Posted')
                    setReview('');
                }
            })
        e.preventDefault();
    }


    return (
        <Box>
            <h2>Write Review</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '43%', m: 1 }}
                    id="outlined-basic"
                    name="name"
                    label="Your Name"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <br />
                <textarea
                    placeholder='Write your review'
                    name="review"
                    onBlur={handleOnBlur}
                    rows="4"
                    cols="50"></textarea>
                <br />
                <TextField
                    sx={{ width: '43%', m: 1 }}
                    id="outlined-basic"
                    name="number"
                    type='number'
                    label="Review the site"
                    onBlur={handleOnBlur}
                    variant="outlined" />

                <br />

                <Button variant="contained" type="submit">Post</Button>
            </form>
        </Box>
    );
};

export default WriteReview;