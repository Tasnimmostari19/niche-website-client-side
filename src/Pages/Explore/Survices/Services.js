import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Services = (props) => {
    const { name, description, img, price, _id } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Price: {price}
                    </Typography>
                </CardContent>
                <NavLink to={`/purchase/${_id}`}> <Button size="small">Buy Now</Button></NavLink>
            </Card>
        </Grid>
    );
};

export default Services;