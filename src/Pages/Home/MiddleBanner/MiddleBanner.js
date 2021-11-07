import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const MiddleBanner = () => {
    return (
        <Box style={{ backgroundColor: "#fff8f5" }} sx={{ py: 10, my: 5 }}>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={8}>
                        <img src="https://i.ibb.co/HqmFnyX/engin-akyurt-g-m8-EDc4-X6-Q-unsplash-1.png" alt="" width="580px" height="380px" />
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Box >
                            <Typography variant="h4" sx={{ fontWeight: 800 }}>Let Us Handle Your Screen <span style={{ color: "#F63E7B" }}>Professionally</span></Typography>

                            <Typography variant="subtitle1" sx={{ my: 2 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum porro laboriosam mollitia? Iusto facilis eum expedita quas ratione voluptates quia, optio delectus doloribus aperiam ipsa neque incidunt, distinctio amet voluptatem.</Typography>

                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={6}>
                                        <Typography variant="h4" sx={{ color: "#F63E7B", fontWeight: "900" }}>500+</Typography>
                                        <Typography variant="subtitle1">Happy Customer</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Typography variant="h4" sx={{ color: "#F63E7B", fontWeight: "900" }}>16+</Typography>
                                        <Typography variant="subtitle1">Total Services</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MiddleBanner;