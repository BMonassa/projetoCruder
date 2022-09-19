import React from 'react';

import Header from '../../components/Header/Header';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import * as yup from "yup";
import axios from 'axios';
import './post.css';

const validationPost = yup.object().shape({
    title: yup.string().required("O Titulo é obrigatório").max(40, " Titulo precisa ter menos de 40 caracteres"),
    brand: yup.string().required("A Marca é obrigatório").max(30, "A Marca precisa ter menos de 30 caracteres"),
    price: yup.string().required("O Preço é obrigatório").max(30, "O Preço precisa ter menos de 30"),
    age: yup.string().required("O Ano é obrigatório").max(30, "O Ano precisa ter menos de 30"),
    __v: yup.string().required("O __V é obrigatório").max(30, "O __V precisa ter menos de 30"),
})

export default function Post() {
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => axios.post("http://localhost:3000/posts", data)
   
    .then((response) => response.json)

    .catch((err) => {
        console.log(err)
    })

    return(
        <div>
            <main>
            <Header  />
                <div className='card-post'>

                    <h1>Cadastrar</h1>

                    <div className='line-post'></div>
                    <div className='card-body-posty'>
                    <form onSubmit={handleSubmit(addPost)}>

                            <div className='fields'>
                                <label>Titulo</label>
                                <input type="text" name="title" {...register("title")}/>
                                <p className='error-message'>{errors.title?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Marca</label>
                                <input type="text" name="brand" {...register("brand")}/>
                                <p className='error-message'>{errors.brand?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Preço</label>
                                <input type="number" name="price" {...register("price")}/>
                                <p className='error-message'>{errors.price?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Ano</label>
                                <input type="number" name="age" {...register("age")}/>
                                <p className='error-message'>{errors.age?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>__V</label>
                                <input type="text" name="__v" {...register("__v")}/>
                                <p className='error-message'>{errors.__v?.message}</p>
                            </div>


                            <div className='btn-post'>
                                <button type="submit">Enviar</button>
                            </div>

                        </form>

                    </div>

                </div>
            </main>
        </div>
    )
}