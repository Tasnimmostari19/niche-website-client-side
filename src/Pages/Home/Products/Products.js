import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://niche-website-server-side-wwab.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);
    const service = products.slice(0, 6);
    return (
        <Box sx={{ flexGrow: 1, marginTop: '50px' }}>
            <Container>
                <h2>Products</h2>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {

                        service.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>

            </Container>
        </Box>
    );
};

export default Products;