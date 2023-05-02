import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const MProduct = (props) => {
    const { name, description, img, price, _id } = props.product



    const handleDeleteProduct = id => {
        const proceed = window.confirm('Delete sure?')
        if (proceed) {
            const url = `https://niche-website-server-side-wwab.vercel.app/product/${id}`;
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
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt=""
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
                <Button onClick={() => handleDeleteProduct(_id)} className='book-btn'>Delete</Button>
            </Card>
        </Grid>
    );
};

export default MProduct;