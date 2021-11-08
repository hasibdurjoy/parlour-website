import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <Box style={{ backgroundColor: "#fff8f5" }} sx={{ py: 3 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Box >
                            <Typography variant="h4" style={{ fontWeight: 800 }}>BEAUTY SALON <br /> FOR EVERY WOMEN</Typography>

                            <Typography sx={{ my: 2 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum porro laboriosam mollitia? Iusto facilis eum expedita quas ratione voluptates quia, optio delectus doloribus aperiam ipsa neque incidunt, distinctio amet voluptatem.</Typography>

                            <Button type="contained" style={{ color: "white", backgroundColor: "#F63E7B", width: "50%", padding: "10px" }}>get an appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://i.ibb.co/PDGG8k4/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beau.png" alt="" width="450px" height="450px" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;