import { Container, Button, CircularProgress, Alert } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';


const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, loginUser, isLoading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault()
    }


    return (
        <Container sx={{ mt: 8 }}>
            <Typography variant="body1" gutterBottom>Login</Typography>
            <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    onBlur={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your password"
                    variant="standard"
                    name="password"
                    onBlur={handleOnChange}
                    type="password" />

                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                <br />
                <NavLink style={{ textDecoration: 'none' }} to='/register'>
                    <Button variant="text">new user? Please Register</Button>
                </NavLink>
                {isLoading && <CircularProgress />}
                {
                    user?.email && <Alert severity="success">successful Login </Alert>
                }
                {error && <Alert severity="error">{error}</Alert>}

            </form>
            <br />
            <br />
        </Container>
    );
};

export default Login;