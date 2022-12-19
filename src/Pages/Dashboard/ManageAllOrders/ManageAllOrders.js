import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch('https://niche-website-server-side-production.up.railway.app/purchase')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])




    const handlePending = id => {
        const url = `https://niche-website-server-side-production.up.railway.app/purchase/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Shipped')

                }
            })
    }




    return (
        <div>
            <h2>manage all order</h2>
            <Row xs={1} md={2} className="g-4">
                {
                    orders.map(order =>
                        <Col key={order._id}>
                            <Card className='card-style'>
                                <Card.Body>
                                    <Card.Title>Name: {order.name}</Card.Title>
                                    <Card.Text>
                                        Email: {order.email}
                                    </Card.Text>
                                    <Card.Text>
                                        Booking Id: {order.booking}
                                    </Card.Text>

                                    <Card.Text>
                                        Product Name: {order.pname}
                                    </Card.Text>
                                    <Card.Text>
                                        Phone no: {order.phone}
                                    </Card.Text>


                                    <Button onClick={() => handlePending(order._id)} className='book-btn'>{order.status}</Button>

                                </Card.Body>
                            </Card>
                        </Col>

                    )
                }
            </Row>
        </div>
    );
};

export default ManageAllOrders;