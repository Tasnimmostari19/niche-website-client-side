import React, { useEffect, useState } from 'react';

const MyOrders = () => {

    const [orders, setOrders] = useState([])


    // useEffect(()=>{
    //     fetch('http://localhost:5000/purchase')
    //     .then(res=>res.json())
    //     .then(data=>)
    // },[])


    return (
        <div>
            <h2>My Orders</h2>
        </div>
    );
};

export default MyOrders;