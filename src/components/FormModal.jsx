import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Modal
} from '@mui/material';
import { BtnAction } from './BtnAction';

const FormModal = ({ desc, route, children, colorBtn }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleOpen = () => {
        setOpen(true)
        navigate(route)
    };
    const handleClose = () => {
        setOpen(false);
        navigate('/')
    };


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
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '8px'
                    }}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{
                            textTransform: 'uppercase',
                            textAlign: 'center',
                        }}
                    >
                        Create a new Post or Edit a Post
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export { FormModal }