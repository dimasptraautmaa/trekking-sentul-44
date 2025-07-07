import React from 'react'
import { BarLoader } from 'react-spinners';

const Loader = ({ text }) => {
    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px'}}>
            <img src="/img/logo.ico" width={60} alt="Stresslo Logo" />
            {(text) ? 
                <h1 style={{color: 'var(--yellow)', fontSize: '1.1rem', marginBottom: '30px', fontFamily: 'sans-serif'}}>{text}</h1>
            : 
                <h1 style={{color: 'var(--text)', fontSize: '1.2rem', marginBottom: '30px', fontFamily: 'sans-serif'}}><span>Stress</span>lo</h1>
            }
            <BarLoader width={250} color='var(--yellow)'/>
        </div>
    )
}

export default Loader;