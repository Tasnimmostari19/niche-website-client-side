import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';

const MyOrders = () => {

    const [orders, setOrders] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://niche-website-server-side-wwab.vercel.app/purchase/myOrder?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    console.log(orders);
    return (
        <div>
            <h2 style={{ margin: '30px' }}>My Orders</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    orders.map(order => <MyOrder

                        key={order._id}
                        order={order}
                    ></MyOrder>)
                }
            </Grid>
        </div>
    );
};

export default MyOrders;