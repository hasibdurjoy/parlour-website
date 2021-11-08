import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import StarRatings from 'react-star-ratings';



const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://ancient-springs-79733.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container sx={{ mt: 5, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 5 }}>Testimonial</Typography>
            <Grid container spacing={5}>
                {
                    reviews.map(service => <>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} >
                                <Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <img src={service.img} alt="" width="70px" />
                                        </Grid>
                                        <Grid item xs={12} md={8}>
                                            <Typography variant="h6" >{service.name}</Typography>
                                            <Typography variant="h6" >{service.about}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Typography variant="subtitle1" sx={{ my: 2 }}>{service.review}</Typography>
                                <Box sx={{ mx: 2, pb: 3 }}>
                                    <StarRatings
                                        rating={service.rating}
                                        starDimension="30px"
                                        starSpacing="10px"
                                        color="orange"
                                    />
                                </Box>
                            </Paper>
                        </Grid>
                    </>)
                }
            </Grid>
        </ Container>
    );
};

export default Testimonial;