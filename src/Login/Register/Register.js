import React from 'react';
import { Container, Button, CircularProgress, Alert } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';

const Register = () => {


    const [loginData, setLoginData] = useState({})
    const history = useHistory();

    const { user, registerUser, isLoading, error } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault()
    }



    return (
        <Container sx={{ mt: 8 }}>
            <Typography variant="body1" gutterBottom>Register</Typography>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    type='name'
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    type='email'
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your password"
                    variant="standard"
                    name="password"
                    onBlur={handleOnBlur}
                    type="password" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Retype Your password"
                    variant="standard"
                    name="password2"
                    onBlur={handleOnBlur}
                    type="password" />

                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                <br />

                <NavLink style={{ textDecoration: 'none' }} to='/login'>
                    <Button variant="text">Already register? Please login</Button>
                </NavLink>


            </form>}
            {isLoading && <CircularProgress />}
            {
                user?.email && <Alert severity="success">New user created</Alert>
            }
            {error && <Alert severity="error">{error}</Alert>}
            <br />
            <br />
        </Container>
    );
};

export default Register;