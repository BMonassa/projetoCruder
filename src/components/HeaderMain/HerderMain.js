import React from 'react';
import './headerMain.css';

import { Link } from 'react-router-dom';

export default function HerdeMain() {
    return(
        <header>
            <div className='container'>
                <div className='logo'>
                    <h1>Cadastro de Carros</h1>
                </div>
                <div className='btn-newPost'>
                    <Link to='/post'>
                        <button>Adicionar novo carro</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}