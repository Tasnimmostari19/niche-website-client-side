import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);

        fetch('https://niche-website-server-side-wwab.vercel.app/product', {

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
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* defaultValue={user.name} */}
                <input style={{ width: '50%', margin: '10px' }} placeholder="Name" {...register("name")} />
                <br />
                <input style={{ width: '50%', margin: '10px' }} placeholder="Status" {...register("status")} />
                <br />
                <input style={{ width: '50%', margin: '10px' }} placeholder="Price" {...register("price")} />
                <br />
                <input style={{ width: '50%', margin: '10px' }} placeholder="Description" {...register("description")} />
                <br />
                <input style={{ width: '50%', margin: '10px' }} placeholder="Img Url" {...register("img")} />
                <br />

                <input style={{ width: '50%', margin: '10px' }} className='form-submit' type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;