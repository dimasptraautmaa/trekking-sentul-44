import React from 'react';
import axios from 'axios';
import Loader from '../../../utils/loader';
import Context from "../../../utils/context";
import authGoogle from "../../../service/authGoogle";
import BackButton from '../../components/backButton/backButton';
import { useNavigate } from 'react-router-dom';
import "./auth.css"

const Login = () => {

    const navigate = useNavigate();
    const context = React.useContext(Context)
    const endpoint = import.meta.env.VITE_API
    const [type, setType] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [password, setPassword] = React.useState("");

    const login = async () => {
        try {
            setLoading(true);
            const response = await axios.post(`${endpoint}/login/client`, { email, password });
            context.setToken(response.data.token);
            navigate('/dashboard');
        } catch (error) {
            error.response && setMessage(error.response.data.message);
        } finally {
            setLoading(false);
            setPassword();
        }
    }

    return (
        <div className='auth-page'>
            <BackButton/>
            <div className='left-auth-page'></div>
            <form onSubmit={(e) => { e.preventDefault(); login(); }} className='right-auth-page'>
                {(loading) ? <Loader/> : 
                <>
                <img src="/img/logo.ico" width={60} alt="" />
                <h1 style={{fontSize: '1.3rem', color: 'var(--text)'}}> <span>Stress</span>lo</h1>
                {(message) ? 
                <h3 style={{fontFamily: 'sans-serif', translate: '0 -5px', fontWeight: '400', marginBottom: "20px"}}>ⓘ {message}</h3>
                : 
                <h3 style={{fontFamily: 'sans-serif', translate: '0 -5px', fontWeight: '400', marginBottom: "20px", opacity: "0.8"}}>Masuk untuk <span>Melanjutkan</span></h3>
                }

                {(type == "email") ? 
                <>
                <div className='input-container' style={{marginTop: '20px'}}>
                    <div className='input-title'>Email : </div>
                    <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} className='input' required/>
                </div>
                <div className='input-container' style={{marginTop: '10px'}}>
                    <div className='input-title'>Password : </div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='input' required/>
                </div>
                <div style={{display: 'flex', width: '90%', gap: '5px', alignItems: 'center'}}>
                    <div onClick={() => setType('')} className='button' style={{marginTop: '20px'}}>
                        <div className='fa-solid fa-repeat fa-lg'></div>
                    </div>
                    <button type='submit' className='button' style={{marginTop: '20px', width: '90%'}}>
                        Masuk
                    </button>
                </div>
                </>
                : 
                <>
                    <div onClick={() => authGoogle()} className='button' style={{marginTop: '20px', width: '90%', color: "var(--text)", backgroundColor: 'unset', border: '1px solid var(--text)'}}>
                        <img src="/img/google.png" width={18} alt="Google Logo" />
                        Lanjutkan dengan Google
                    </div>
                    <div onClick={() => setType('email')} className='button' style={{marginTop: '10px', width: '90%', color: "var(--text)", backgroundColor: 'unset', border: '1px solid var(--text)'}}>
                        <div className='fa-solid fa-envelope fa-lg'></div>
                        Lanjutkan dengan Email
                    </div>
                </>
                }

                <h3 style={{fontFamily: 'sans-serif', fontSize: "0.8rem", marginTop: '70px', marginBottom: '30px'}}>Belum punya akun? <a onClick={() => navigate('/register')}>Daftar sekarang!</a></h3>
                </>
                }
            </form>
        </div>
    )
}

export default Login