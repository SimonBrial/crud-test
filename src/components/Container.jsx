import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Axios from 'axios';
import { Stack } from '@mui/material';
import { DataTable } from './DataTable';
import { Header } from './Header';
import { FormModal } from './FormModal';

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

    /* const createPost = async (post) => {
        const URL_CREATE = 'https://jsonplaceholder.typicode.com/posts';

        try {
            Axios(URL_CREATE, {
                method: 'POST',
                data: {
                    post: post
                }
            })
            setPosts([...posts, post])
        }
        catch (error) {
            console.log(error)
        }
    }; */

    return (
        <Stack>
            <Header />
            <DataTable items={posts} deleteAction={deletePost} />
            <FormModal />
        </Stack>
    )
}

export { Container }

/*
    La informacion del formulario se envia perfectamente y las respuesta del servidor es 201, perfecto!!!... Ahora necesito pasar esa informacion al estado del componente container, para poder setear el estado y asi poder mostrar la informacion creada


    SE DEBE CORREGIR EL PROBLEMA DE LAS RUTAS, YA QUE NO SE MUESTRA LA RUTA REAL EN LA BARRA DE BUSQUEDA
*/