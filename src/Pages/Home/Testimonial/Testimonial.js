import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import StarRatings from 'react-star-ratings';

const reviews = [
    {
        name: "Nash Patrik",
        about: "CEO, Manpol",
        rating: 5,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, iste inventore. Tenetur consequatur exercitationem autem, perspiciatis consectetur repellat consequuntur provident quod modi ut nulla animi earum suscipit, ipsa hic delectus.",
        img: "https://i.ibb.co/VMRfGSL/Ellipse-90.png"
    },

    {
        name: "Miriam Barron",
        about: "CEO, Manpol",
        rating: 5,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, iste inventore. Tenetur consequatur exercitationem autem, perspiciatis consectetur repellat consequuntur provident quod modi ut nulla animi earum suscipit, ipsa hic delectus.",
        img: "https://i.ibb.co/gmqTPnb/Ellipse-92.png"
    },

    {
        name: "Bria Malone",
        about: "CEO, Manpol",
        rating: 5,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, iste inventore. Tenetur consequatur exercitationem autem, perspiciatis consectetur repellat consequuntur provident quod modi ut nulla animi earum suscipit, ipsa hic delectus.",
        img: "https://i.ibb.co/569bd0r/Ellipse-91.png"
    },

]

const Testimonial = () => {
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