import React, { useState, useEffect } from 'react';
import HerdeMain from '../../components/HeaderMain/HerderMain';
import axios from 'axios';
import './feed.css';

import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

export default function Feed({}) {

const [posts, setPosts] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((response) => {
                setPosts(response.data)
            })
            .catch(() => {
                console.log("Deu errado")
            })
    }, [deletePost])


function deletePost(idDelete) {

    axios.delete(`http://localhost:3000/posts/${idDelete}`)
        //setPosts(posts.filter(post => post.id !== idDelete))
        // Ou usar a função deletePost no useEffect
    }

    return (

        <div>
            <HerdeMain />
            <div>
                <p className='text'> Existem <h2 className='textTwo'>{posts.length}</h2> Carros cadastrados no banco de dados </p>
            </div>
            
            <main>
                <div className='cards'>
                    {posts.map((post, key) => {
                    return (
                        <div className='card' key={key}>
                            <table className='tabela' >
                                <thead >
                                    <tr className='titulos'>
                                        <th>Titulo </th>
                                        <th>Marca</th>
                                        <th>Preço</th>
                                        <th>Ano</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>

                                        <td>{post.title}</td>
                                        <td>{post.brand}</td>
                                        <td>{post.price}</td>
                                        <td>{post.age}</td>
                                        <td>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className='line'></div>
                                <div className='btns'>
                                   
                                <div className='btn-edit'>
                                    <Link to={{ pathname: `/edit/${post.id}` }}>
                                        <button><FiEdit className='trash' /></button>
                                    </Link>
                                </div>

                                <div className='btn-readmore'>
                                    <Link to={{ pathname: `/lermais/${post.id}` }}>
                                        <button>+</button>
                                    </Link>
                                </div>

                                <div className='btn-delete'>

                                    <button onClick={() => deletePost(post.id)}><BsTrash className='trash' /></button>
                                </div>

                            </div>
                        </div>
                        )
                    })}
                </div>
            </main>
        </div>

    )
}