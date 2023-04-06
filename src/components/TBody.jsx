import React from 'react';
import {
    Stack,
    styled,
    TableBody,
    TableCell,
    tableCellClasses,
    TableRow
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { BtnAction } from './BtnAction';
import { FormModal } from './FormModal';

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

const TBody = ({ rows }) => {
    return (
        <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.id}>
                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                    <StyledTableCell align="center">{row.userId}</StyledTableCell>
                    <StyledTableCell align="center">{row.title}</StyledTableCell>
                    <StyledTableCell align="center">{row.body}</StyledTableCell>
                    <StyledTableCell align="center">
                        <Stack direction={'column'} spacing={1}>
                            <FormModal colorBtn={'warning'} route={'edit'}>
                                <EditIcon />
                            </FormModal>
                            <BtnAction color={'error'} handle={() => console.log('From Delete button')}>
                                <DeleteIcon />
                            </BtnAction>
                        </Stack>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
        </TableBody>
    )
}

export { TBody }