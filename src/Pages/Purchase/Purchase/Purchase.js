import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";

const Purchase = () => {

    const { user } = useAuth()
    const [product, setProduct] = useState({});
    const { pid } = useParams();
    console.log(pid);

    useEffect(() => {
        fetch(`https://murmuring-basin-44738.herokuapp.com/product/${pid}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    console.log(user);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'panding';
        data.booking = pid;
        data.pname = product.name;



        fetch(`https://murmuring-basin-44738.herokuapp.com/purchase`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Orderd a product')
                    reset(data);
                }
            })
    }



    return (
        <>

            <Image src={product?.img} fluid />
            <div className='m-5'>

                <h1>{product.name}</h1>
                <h4>Price: {product.price}</h4>
                <p className='m-5'>{product.description}</p>

                <h2>Purchase</h2>
                <form className='order-form' onSubmit={handleSubmit(onSubmit)}>
                    {/* defaultValue={user.name} */}
                    <input defaultValue={user.displayName} {...register("name", { required: true })} /><br />

                    <input defaultValue={user.email} {...register("email", { required: true })} /><br />
                    <input placeholder="address" {...register("address")} /><br />
                    <input placeholder="Phone Number" type="number" {...register("phone")} /><br />
                    <input className='form-submit' type="submit" />
                </form>
            </div>
        </>
    );
};

export default Purchase;