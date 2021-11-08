import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const OrderList = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://ancient-springs-79733.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="left">Service</StyledTableCell>
                        <StyledTableCell align="left">Email</StyledTableCell>
                        <StyledTableCell align="left">Pay With</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {bookings.map((row) => (
                        <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row.displayName}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.email}</StyledTableCell>
                            <StyledTableCell align="left">{row.serviceName}</StyledTableCell>
                            <StyledTableCell align="left">{row.payment}</StyledTableCell>
                            <StyledTableCell align="left">{row.status}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OrderList;