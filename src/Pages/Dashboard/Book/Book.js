import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Button, Container, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material';
import { Box, fontWeight } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const Book = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
    return (
        <div>
            <Container sx={{ width: "50%", pb: 3 }} style={{ marginLeft: 0 }}>
                <form >
                    <TextField
                        id="outlined-basic"
                        type="texts"
                        variant="outlined"
                        defaultValue={user.displayName}
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField
                        id="outlined-basic"
                        type="texts"
                        name="name"
                        variant="outlined"
                        defaultValue={user.email}
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <TextField
                        id="outlined-basic"
                        type="texts"
                        name="name"
                        variant="outlined"
                        defaultValue={service.name}
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <FormLabel component="legend" style={{ textAlign: "left" }}>Pay With </FormLabel>
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                        <FormControlLabel value="creditCart" control={<Radio />} label="Credit Card" />
                        <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
                    </RadioGroup>

                    <TextField
                        id="outlined-basic"
                        type="texts"
                        label="card number"
                        name="name"
                        variant="outlined"
                        defaultValue={service.name}
                        sx={{ width: "100%", backgroundColor: "white", mb: 1 }} />

                    <Box style={{ display: "flex", justifyContent: "space-around", gap: 10 }} sx={{ my: 2 }}>
                        <TextField
                            id="outlined-basic"
                            label="MM/YY"
                            variant="outlined"
                            sx={{ width: "50%", backgroundColor: "white" }} />

                        <TextField
                            id="outlined-basic"
                            label="CVC"
                            variant="outlined"
                            sx={{ width: "50%", backgroundColor: "white" }} />
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography>Your Service Charge will be {service.price}</Typography>
                        <Button
                            type="contained"
                            style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px" }} sx={{ my: 2 }}
                        >Pay</Button>
                    </Box>

                </form>

            </Container>

        </div>
    );
};

export default Book;