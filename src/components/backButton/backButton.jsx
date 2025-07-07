import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./backButton.css"

const BackButton = ({ path }) => {
    const navigate = useNavigate();

    const handle = () => {
        localStorage.getItem('email') && localStorage.removeItem("email");
        localStorage.getItem('username') && localStorage.removeItem("username");
        localStorage.getItem('password') && localStorage.removeItem("password");
        localStorage.getItem('shopname') && localStorage.removeItem('shopname');
        localStorage.getItem('confirmPassword') && localStorage.removeItem("confirmPassword");
        navigate(path ? path : '/');
    }

    return (
        <div onClick={() => handle()} className='back'>
            <div className='fa-solid fa-caret-left fa-lg'/>
            <h1 style={{fontSize: '0.9rem', fontWeight: '400', color: 'white'}}>Kembali</h1>
        </div>
    )
}

export default BackButton;