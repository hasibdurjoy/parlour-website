import { Button, Container, TextField, Typography } from '@mui/material';
import { Box, fontWeight } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <Box sx={{ my: 2 }}>
            <Container sx={{ width: "35%", pt: 3, pb: 3 }} style={{ border: "1px solid black" }}>
                <img src="https://i.ibb.co/2qzH431/Group-33092.png" alt="" width="150" />
                <Typography variant="h6" sx={{ textAlign: "left", fontWeight: 900 }}>Log In</Typography>
                <form >
                    <TextField
                        id="outlined-basic"
                        type="email"
                        name="name"
                        label="Email"
                        variant="standard"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />
                    <TextField
                        id="outlined-basic"
                        type="password"
                        name="name"
                        label="Password"
                        variant="standard"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <Button
                        type="contained"
                        style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px", width: "100%" }} sx={{ my: 2 }}
                    >Login</Button>

                    <Link to="/register">Don't Have an Account ? <span style={{ color: "#F63E7B" }}>Register now</span></Link>

                </form>

            </Container>

            <Container sx={{ width: "35%", pt: 1, pb: 3 }}>
                <Typography sx={{ mt: 3 }}>---------------------------------Or Log in using---------------------------------</Typography>

                <Button
                    onClick={signInUsingGoogle}
                    type="contained"
                    style={{ color: "black", backgroundColor: "white", padding: "5px 10px", width: "100%", borderRadius: "20px", border: "1px solid black", display: "flex", justifyContent: "space-around" }}
                    sx={{ mt: 2 }}>
                    <img src="https://i.ibb.co/kMP3qmn/Group-573.png" alt="" width="25px" /> Login with google
                </Button>
            </Container>
        </Box>
    );
};

export default Login;