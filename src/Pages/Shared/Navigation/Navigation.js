import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1, mx: 3 }}>
            <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
                <Toolbar>
                    <img src="https://i.ibb.co/2qzH431/Group-33092.png" alt="" width="150" />

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>

                    <NavLink to="/home" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Home</Button></NavLink>

                    <NavLink to="/login" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Our Portfolio</Button></NavLink>

                    <NavLink to="/login" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Our Team</Button></NavLink>

                    <NavLink to="/login" style={{ textDecoration: "none" }}><Button style={{ color: "black" }} type="contained">Contact Us</Button></NavLink>

                    <NavLink to="/login" style={{ textDecoration: "none", backgroundColor: "#F63E7B", borderRadius: "20px", padding: "3px 20px" }}><Button type="contained" style={{ color: "white" }}>Login</Button></NavLink>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;