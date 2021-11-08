import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { useHistory } from 'react-router';


const Services = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleClick = (id) => {
        history.push(`dashboard/${id}`)
    }
    return (
        <Container sx={{ mt: 2 }}>
            <h1>Our Awesome <span style={{ color: "#F63E7B" }}>Services</span></h1>
            <Grid container spacing={5}>
                {
                    services.map(service => <>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} onClick={() => { handleClick(service._id) }}>
                                <img src={service.img} alt="" width="70px" style={{ marginTop: "20px" }} />
                                <Typography variant="h6" >{service.name}</Typography>
                                <Typography variant="h6" sx={{ my: 2 }}>$ {service.price}</Typography>
                                <Box sx={{ mx: 2, pb: 3 }}>
                                    <Typography variant="subtitle1"  >{service.description}</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </>)
                }
            </Grid>
            <Button type="contained" style={{ color: "white", backgroundColor: "#F63E7B", width: "30%", padding: "10px" }} sx={{ my: 2 }}>Explore More</Button>
        </ Container>
    );
};

export default Services;