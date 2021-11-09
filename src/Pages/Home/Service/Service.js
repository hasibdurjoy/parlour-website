import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { useHistory } from 'react-router';

const Service = ({ service }) => {
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`dashboard/${id}`)
    }
    return (
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
    );
};

export default Service;