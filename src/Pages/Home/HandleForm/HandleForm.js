import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const HandleForm = () => {
    return (
        <Box style={{ backgroundColor: "#fff8f5" }} sx={{ py: 5, px: 5, mt: 5 }}>
            <Container sx={{ width: "50%" }}>
                <Typography variant="h5" sx={{ mb: 5, fontWeight: 900 }}>Let us handle your <br /> project professionally </Typography>
                <form>
                    <Box style={{ display: "flex", justifyContent: "space-around", gap: 10 }} sx={{ my: 4 }}>
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            sx={{ width: "50%", backgroundColor: "white" }} />

                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            sx={{ width: "50%", backgroundColor: "white" }} />
                    </Box>

                    <Box style={{ display: "flex", justifyContent: "space-around", gap: 10 }}>
                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            sx={{ width: "50%", backgroundColor: "white" }} />

                        <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            sx={{ width: "50%", backgroundColor: "white" }} />
                    </Box>


                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        placeholder="Minimum 3 rows"
                        style={{ width: "100%", marginTop: 30 }}
                        sx={{ mx: 3, my: 4 }} />
                    <Button type="contained" style={{ color: "white", backgroundColor: "#F63E7B", padding: "10px" }} sx={{ mt: 5 }}>Send Message</Button>
                </form>
            </Container>
        </Box>
    );
};

export default HandleForm;