import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import MProduct from './MProduct/MProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('https://niche-website-server-side-production.up.railway.app/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return (
        <div>
            <h2>manage product</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {

                    products.map(product => <MProduct
                        key={product._id}
                        product={product}
                    ></MProduct>)
                }
            </Grid>
        </div>
    );
};

export default ManageProduct;