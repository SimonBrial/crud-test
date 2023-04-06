import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

const BtnAction = ({ children, description, color, handle }) => {
    return (
        <Button
            variant="contained"
            color={color}
            onClick={handle}
        >
            { children }
            <Typography variant="h6">{description}</Typography>
        </Button>
    )
}

export { BtnAction }