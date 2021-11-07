import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const services = [
    {
        id: 1,
        name: "Anti Age Face Treatment",
        price: 199,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, iste inventore. Tenetur consequatur exercitationem autem, perspiciatis consectetur repellat consequuntur provident quod modi ut nulla animi earum suscipit, ipsa hic delectus.",
        img: "https://i.ibb.co/SwBdx6R/Group-1372.png"
    },
    {
        id: 2,
        name: "Hair Color and Style",
        price: 99,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, iste inventore. Tenetur consequatur exercitationem autem, perspiciatis consectetur repellat consequuntur provident quod modi ut nulla animi earum suscipit, ipsa hic delectus.",
        img: "https://i.ibb.co/f1D4Cfw/Group-1374.png"
    },
    {
        id: 3,
        name: "Skin Care Treatment",
        price: 299,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, iste inventore. Tenetur consequatur exercitationem autem, perspiciatis consectetur repellat consequuntur provident quod modi ut nulla animi earum suscipit, ipsa hic delectus.",
        img: "https://i.ibb.co/pLf3ZrM/Group-1373.png"
    },
]

const Services = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <h1>Our Awesome <span style={{ color: "#F63E7B" }}>Services</span></h1>
            <Grid container spacing={5}>
                {
                    services.map(service => <>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} >
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