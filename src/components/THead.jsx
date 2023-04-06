import React from 'react';
import {
    styled,
    TableCell,
    tableCellClasses,
    TableHead,
    TableRow
} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const THead = () => {
    return (
        <TableHead >
            <TableRow >
                <StyledTableCell sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                }} align="center">ID</StyledTableCell>
                <StyledTableCell sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                }} align="center">User ID</StyledTableCell>
                <StyledTableCell sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                }} align="center">Title</StyledTableCell>
                <StyledTableCell sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                }} align="center">Description</StyledTableCell>
                <StyledTableCell sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                }} align="center">Action</StyledTableCell>
            </TableRow>
        </TableHead>
    )
}

export { THead }