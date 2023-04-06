import React from 'react';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import { DataTable } from './DataTable';
import { Header } from './Header';

const Container = () => {
    return (
        <Stack>
            <Header />
            <DataTable />
            <>
                <Outlet/>
            </>
        </Stack>
    )
}

export { Container }