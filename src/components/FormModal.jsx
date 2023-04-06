import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Modal,
    Box,
} from '@mui/material';
import { BtnAction } from './BtnAction';
import { Form } from './Form';

const FormModal = ({ desc, route, children, colorBtn }) => {

    // --- Modal logic ---
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const prueba = () => {
        console.log('prueba')
    }

    const handleOpen = () => {
        setOpen(true)
        navigate(route)
    };
    const handleClose = () => {
        setOpen(false);
        navigate('/')
    };
    // --- Modal logic ---

    return (
        <div>
            <BtnAction
                description={desc}
                handle={handleOpen}
                color={colorBtn}
            >
                {children}
            </BtnAction>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 500,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '8px',
                    }}>
                    <Form back={handleClose}/>
                </Box>
            </Modal>
        </div>
    );
}

export { FormModal }