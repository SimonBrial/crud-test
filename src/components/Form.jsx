import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import {
    FormHelperText,
    FormControl,
    Typography,
    TextField,
    MenuItem,
    Select,
    Stack,
} from '@mui/material';
import { BtnAction } from './BtnAction';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Form = ({ back }) => {


    // --- Form logic ---
    const { register, handleSubmit } = useForm();

    const createPost = async (post) => {
        const URL_CREATE = 'https://jsonplaceholder.typicode.com/posts';
        Axios(URL_CREATE, {
            method: 'POST',
            data: {
                post: post
            }
        })
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)});
    };

    const onSubmit = (data) => {
        createPost(data)
        navigation('/')
        console.log(data)
    };

    // --- Form logic ---

    // --- Select input logic ---
    const [userId, setUserId] = useState('');

    const handleChange = (event) => {
        setUserId(event.target.value);
    };
    // --- Select input logic ---

    // --- Navigation logic ---
    const navigation = useNavigate();

    // --- Navigation logic ---

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
                spacing={2}
                sx={{
                    padding: '1rem'
                }}
            >
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
                            {...register('userId')}
                            value={userId}
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
                        <TextField type='number' defaultValue={100} sx={{ width: '100%' }} {...register('id')}></TextField>
                        <FormHelperText sx={{ textAlign: 'center' }}>Indicates a number of 3 digits and above</FormHelperText>
                    </FormControl>
                </Stack>
                <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='h6'>Title</Typography>
                    <TextField sx={{ width: '75%' }} {...register('title')}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='h6'>Description</Typography>
                    <TextField multiline sx={{ width: '75%' }} {...register('body')}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={1} justifyContent={'center'}>
                    <BtnAction
                        type={'submit'}
                        description={'Create Post'}
                        color={'success'}
                        handle={() => onSubmit()}
                    >
                        <AddCircleOutlineIcon
                            sx={{
                                margin: '0 0.5rem'
                            }}
                        />
                    </BtnAction>
                    <BtnAction
                        type={'button'}
                        description={'Back'}
                        color={'error'}
                        handle={() => back()}
                    >
                        <ArrowBackIosIcon />
                    </BtnAction>
                </Stack>
            </Stack>
        </form>

    )
}

export { Form }