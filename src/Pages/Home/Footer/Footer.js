import React from 'react';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';

const Footer = () => {
    return (

        <div style={{ backgroundColor: 'rgb(238, 192, 133)' }}>
            <Grid style={{ paddingTop: "40px" }} container spacing={2}>
                <Grid item xs={4}>
                    <h1>Pottery Bangladesh</h1>
                </Grid>
                <Grid style={{ paddingTop: "60px" }} item xs={4}>
                    <i style={{ marginRight: "30px" }} class="fab fa-facebook-f"></i>
                    <i style={{ marginRight: "30px" }} class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                </Grid>
                <Grid item xs={4}>
                    <h5>Address: Banani,Dhaka</h5>
                    <h5>Phone: 0171258743698</h5>
                    <h5>Email:potterybangladesh@mail.com</h5>
                </Grid>

            </Grid>
        </div>

    );
};

export default Footer;