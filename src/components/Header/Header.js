import React from 'react';
import Back from '../../images/back-button.svg';
import { Link } from 'react-router-dom';

export default function Herde() {
    return(
        <header>
            <div className='container'>
                    <Link to='/'>
                        <img src={Back} style={{width: '50px'}}/>
                    </Link>
            </div>
        </header>
    )
}