import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import DashboardBanner from '../../Shared/DashboardBanner/DashboardBanner';

const BookingList = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`https://ancient-springs-79733.herokuapp.com/bookings/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <Box>
            <DashboardBanner name={'Your Booking List'} />
            <Container sx={{ mt: 5, mb: 4 }}>
                <Grid container spacing={5}>
                    {
                        bookings.map(booking => <>
                            <Grid item xs={12} md={4}>
                                <Paper elevation={3} >
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={4}>
                                                <img src={booking.serviceImg} alt="" width="70px" />
                                            </Grid>
                                            <Grid item xs={12} md={8}>
                                                {booking.status}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Typography variant="h6" sx={{ my: 2 }}>{booking.serviceName}</Typography>
                                    <Box sx={{ mx: 2, pb: 3 }}>
                                        <Typography variant="subtitle1"  >
                                            {booking.serviceDescription}</Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        </>)
                    }
                </Grid>
            </ Container>
        </Box>
    );
};

export default BookingList;