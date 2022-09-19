import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

import axios from 'axios';
import './lermais.css';

export default function LerMais() {

    const [ lermais, setLermais ] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
        .then((response) => {
            setLermais(response.data)
        })

    }, [])
    
    return(
        
        <div>

            <Header />
            
            <main>
                
                <div className="cards">
                <h1 className='titleInfo'> Todas as informações do cadastro</h1>

                    <div className="card" >

                        <div className='conteudo'>
                        <h2 className='conteudoTwo'>ID: {lermais.id}</h2>
                        <h2 className='conteudoTwo'>_V:  {lermais.__v}</h2>
                        <h2 className='conteudoTwo'>Titulo: {lermais.title}</h2>
                        <h2 className='conteudoTwo'>Marca: {lermais.brand}</h2>
                        <h2 className='conteudoTwo'>Preço: {lermais.price}</h2>
                        <h2 className='conteudoTwo'>Era: {lermais.age}</h2>
                    </div>

                        <div className="line"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}