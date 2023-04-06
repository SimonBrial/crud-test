import React from 'react'
import { Stack, Typography } from '@mui/material'
import { FormModal } from './FormModal'

const Header = () => {
    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{
                backgroundColor: '#0db6ea',
                padding: '1rem',
                borderRadius: '5px',
                color: '#FFFFFF',
                marginBottom: '0.5rem',
            }}>
            <Typography variant='h4'>DATA TABLE APP</Typography>
            <FormModal desc={'create a new post'} route={'create'} />
        </Stack>
    )
}

export { Header }