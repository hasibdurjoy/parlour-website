import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1, px: 0 }} >
            <AppBar position="static" sx={{ backgroundColor: "#fff8f5", color: "black", boxShadow: "none" }}>
                <Toolbar>
                    <img src="https://i.ibb.co/2qzH431/Group-33092.png" alt="" width="150" />

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>

                    <NavLink to="/home" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Home</Button></NavLink>

                    <NavLink to="/login" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Our Portfolio</Button></NavLink>

                    <NavLink to="/login" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Our Team</Button></NavLink>

                    <NavLink to="/login" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Contact Us</Button></NavLink>

                    {
                        user?.email ? <>

                            <Button type="contained" style={{ color: "black", backgroundColor: "white", borderRadius: "20px", padding: "10px 20px" }}>{user.displayName}</Button>

                            <Button onClick={logOut} type="contained" style={{ color: "white", backgroundColor: "#F63E7B", borderRadius: "20px", padding: "10px 20px" }}>Log out</Button>
                        </>
                            :
                            <>
                                <NavLink to="/login" style={{ textDecoration: "none", backgroundColor: "#F63E7B", borderRadius: "20px", padding: "3px 20px" }}><Button type="contained" style={{ color: "white" }}>Login</Button></NavLink></>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;