import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);

        fetch('http://localhost:5000/product', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added a product')
                    reset(data);
                }
            })

    }


    return (
        <div>
            <h2>add a product</h2>
            <form className='order-form add-trip-form' onSubmit={handleSubmit(onSubmit)}>
                {/* defaultValue={user.name} */}
                <input placeholder="Name" {...register("name")} />
                <br />
                <input placeholder="Status" {...register("status")} />
                <br />
                <input placeholder="Price" {...register("price")} />
                <br />
                <input placeholder="Description" {...register("description")} />
                <br />
                <input placeholder="Img Url" {...register("img")} />
                <br />

                <input className='form-submit' type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;