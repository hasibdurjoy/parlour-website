import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const BookingList = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`https://ancient-springs-79733.herokuapp.com/bookings/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <Container sx={{ mt: 5, mb: 4 }}>
            <Grid container spacing={5}>
                {
                    bookings.map(service => <>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} >
                                <Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <img src={service.img} alt="" width="70px" />
                                        </Grid>
                                        <Grid item xs={12} md={8}>
                                            {service.status}
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Typography variant="h6" sx={{ my: 2 }}>{service.name}</Typography>
                                <Box sx={{ mx: 2, pb: 3 }}>
                                    <Typography variant="subtitle1"  >{service.description.slice(0, 30)}</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </>)
                }
            </Grid>
        </ Container>
    );
};

export default BookingList;