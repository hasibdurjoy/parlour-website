import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Alert, Button, Container, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material';
import DashboardBanner from '../../Shared/DashboardBanner/DashboardBanner';

const Review = () => {
    const { user } = useAuth();
    const [loginData, setLoginData] = useState({});
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleBooking = e => {
        console.log(loginData);
        const reviewData = {
            name: user.displayName,
            ...loginData,
            img: user.photoURL
        }
        fetch('https://ancient-springs-79733.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                }
            });

        e.preventDefault();
    }
    return (
        <div>
            <DashboardBanner name={"Review"} />
            <Container sx={{ width: "50%", pb: 3 }} style={{ marginLeft: 0 }}>
                <form onSubmit={handleBooking}>
                    <TextField
                        required
                        name="name"
                        label="Name"
                        value={user.displayName}
                        id="outlined-basic"
                        type="texts"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField
                        onBlur={handleOnChange}
                        required
                        label="About yourself"
                        id="outlined-basic"
                        type="text"
                        name="about"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField
                        onBlur={handleOnChange}
                        required
                        label="rating out of 5"
                        id="outlined-basic"
                        type="number"
                        name="rating"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField
                        onBlur={handleOnChange}
                        required
                        label="review"
                        id="outlined-basic"
                        type="texts"
                        name="review"
                        variant="outlined"
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />


                    <Button
                        type="submit"
                        style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px", width: "100%" }} sx={{ my: 2 }}
                    >Add</Button>

                </form>
                {
                    bookingSuccess && <Alert severity="success">This is a success alert — check it out!</Alert>

                }
            </Container>
        </div>
    );
};

export default Review;