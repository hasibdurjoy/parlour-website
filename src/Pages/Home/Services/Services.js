import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://ancient-springs-79733.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <Container sx={{ mt: 2 }}>
            <h1>Our Awesome <span style={{ color: "#F63E7B" }}>Services</span></h1>
            <Grid container spacing={5}>
                {
                    services.map(service => <Service service={service} />)
                }
            </Grid>
            <Button type="contained" style={{ color: "white", backgroundColor: "#F63E7B", width: "30%", padding: "10px" }} sx={{ my: 2 }}>Explore More</Button>
        </ Container>
    );
};

export default Services;