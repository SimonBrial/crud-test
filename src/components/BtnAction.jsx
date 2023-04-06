import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

const BtnAction = ({ children, description, color, handle, type }) => {
    return (
        <Button
            type={type}
            variant="contained"
            color={color}
            onClick={handle}
        >
            {children}
            <Typography variant="h6">{description}</Typography>
        </Button>
    )
}

export { BtnAction }