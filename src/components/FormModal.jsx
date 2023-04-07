import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Modal,
    Box,
} from '@mui/material';
import { BtnAction } from './BtnAction';
import { Form } from './Form';

const FormModal = ({ 
    desc, 
    routeTo, 
    routeBack, 
    children, 
    colorBtn
}) => {

    // --- Modal logic ---
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(true)
        navigate(routeTo)
    };
    
    
    const handleClose = () => {
        setOpen(false);
        navigate(routeBack)
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
                    <Form back={handleClose} />
                </Box>
            </Modal>
        </div>
    );
}

export { FormModal }