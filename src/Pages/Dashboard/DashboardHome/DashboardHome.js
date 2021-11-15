import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div>
            <h2>Welcome to Dashboard</h2>
            <Link to="/"><Button sx={{ color: 'black' }} color="inherit">Home</Button></Link>
            <Link to="/explore"><Button sx={{ color: 'black' }} color="inherit">Explore</Button></Link>
        </div>
    );
};

export default DashboardHome;