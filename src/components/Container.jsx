import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Axios from 'axios';
import { Stack } from '@mui/material';
import { DataTable } from './DataTable';
import { Header } from './Header';

const Container = () => {

    const [posts, setPosts] = useState('');

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const URL_GET = 'https://jsonplaceholder.typicode.com/posts';

        try {
            const getPosts = await Axios.get(URL_GET);
            setPosts(getPosts.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const deletePost = async (id) => {
        const URL_DELETE = `https://jsonplaceholder.typicode.com/posts/${id}`;
        try {
            await Axios(URL_DELETE, {
                method: 'DELETE',
                data: {
                    id: id
                }
            })
            setPosts(posts.filter(post => post.id !== id))
            //console.log(id)
        }
        catch (error) {
            console.log(error)
        }
    };

    const createPost = async () => {};

    return (
        <Stack>
            <Header />
            <DataTable items={posts} deleteAction={deletePost}/>
            <>
                <Outlet />
            </>
        </Stack>
    )
}

export { Container }