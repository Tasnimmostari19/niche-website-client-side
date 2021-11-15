import React, { useEffect, useState } from 'react';
import Services from '../Survices/Services';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const Explore = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://murmuring-basin-44738.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);

    return (


        <Box sx={{ flexGrow: 1, marginTop: '50px' }}>
            <Container>
                <h2>Explore</h2>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Services

                            key={product._id}
                            service={product}
                        ></Services>)
                    }

                </Grid>

            </Container>
        </Box>
    );
};

export default Explore;