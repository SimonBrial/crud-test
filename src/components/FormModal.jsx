import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FormHelperText,
    FormControl,
    Typography,
    TextField,
    MenuItem,
    Select,
    Modal,
    Stack,
    Box,
} from '@mui/material';
import { BtnAction } from './BtnAction';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const FormModal = ({ desc, route, children, colorBtn }) => {
    const [open, setOpen] = useState(false);
    const [age, setAge] = useState('');

    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(true)
        navigate(route)
    };
    const handleClose = () => {
        setOpen(false);
        navigate('/')
    };


    const handleChange = (event) => {
        setAge(event.target.value);
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
                        width: 500,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '8px',
                    }}>
                    <Stack spacing={2} sx={{
                        padding: '1rem'
                    }}>
                        <Typography
                            id="modal-modal-title"
                            variant="h5"
                            component="h2"
                            sx={{
                                textTransform: 'uppercase',
                                textAlign: 'center',
                            }}
                        >
                            Create a new Post or Edit a Post
                        </Typography>
                        <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography variant='h6'>User ID</Typography>
                            <FormControl sx={{ m: 1, width: '75%' }}>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    sx={{ width: '100%' }}
                                >
                                    <MenuItem value="">
                                        <em>Select an ID</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                </Select>
                                <FormHelperText sx={{ textAlign: 'center' }}>Choose a number</FormHelperText>
                            </FormControl>
                        </Stack>
                        <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography variant='h6'>ID</Typography>
                            <FormControl sx={{ width: '75%' }}>
                                <TextField type='number' defaultValue={100} sx={{ width: '100%' }}></TextField>
                                <FormHelperText sx={{ textAlign: 'center' }}>Indicates a number of 3 digits and above</FormHelperText>
                            </FormControl>
                        </Stack>
                        <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography variant='h6'>Title</Typography>
                            <TextField sx={{ width: '75%' }}></TextField>
                        </Stack>
                        <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography variant='h6'>Description</Typography>
                            <TextField multiline sx={{ width: '75%' }}></TextField>
                        </Stack>
                        <Stack direction={'row'} spacing={1} justifyContent={'center'}>
                            <BtnAction
                                description={'Create Post'}
                                color={'success'}
                                handle={() => console.log('From create post button')}
                            >
                                <AddCircleOutlineIcon
                                    sx={{
                                        margin: '0 0.5rem'
                                    }}
                                />
                            </BtnAction>
                            <BtnAction
                                description={'Back'}
                                color={'error'}
                                handle={() => console.log('From create post button')}
                            >
                                <ArrowBackIosIcon />
                            </BtnAction>
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

export { FormModal }