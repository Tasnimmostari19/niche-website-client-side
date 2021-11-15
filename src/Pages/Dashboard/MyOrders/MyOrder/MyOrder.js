import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React from 'react';

const MyOrder = (props) => {
    const { name, booking, pname, email, _id } = props.order;



    const handleDeleteProduct = id => {
        const proceed = window.confirm('You really want to delete this order?')
        if (proceed) {
            const url = `http://localhost:5000/purchase/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                    }
                })
        }

    }



    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ border: 0, boxShadow: 0 }}>

                <CardContent>
                    <Typography variant="h5" component="div">
                        User Name:{name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        User email:{email}
                    </Typography>

                    <Typography variant="h6" component="div">
                        Product Name:{pname}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Product Id:{booking}
                    </Typography>
                </CardContent>
                <Button onClick={() => handleDeleteProduct(_id)} className='book-btn'>Delete</Button>
            </Card>
        </Grid>
    );
};

export default MyOrder;