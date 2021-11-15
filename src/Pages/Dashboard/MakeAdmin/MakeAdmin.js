import { Alert, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e => {
        setEmail(e.target.value);

    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/user', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);

                    setSuccess(true);
                }
            })
        e.preventDefault()
    }

    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit} action="">
                <TextField
                    label="Standard"
                    variant="standard"
                    onBlur={handleOnBlur}
                    type="email"
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made admin successfully </Alert>
            }
        </div>
    );
};

export default MakeAdmin;