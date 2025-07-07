import React from 'react';
import axios from 'axios';
import swalert from "../../../utils/swalert";
import Loader from '../../../utils/loader';
import authGoogle from '../../../service/authGoogle';
import BackButton from '../../components/backButton/backButton';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const endpoint = import.meta.env.VITE_API;

    const [count, setCount] = React.useState(parseInt(localStorage.getItem('count')) || 1);
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const [OTP, setOTP] = React.useState("");
    const [email, setEmail] = React.useState(localStorage.getItem("email") || "");
    const [username, setUsername] = React.useState(localStorage.getItem("username") || "");
    const [shopname, setShopname] = React.useState(localStorage.getItem("shopname") || "");
    const [password, setPassword] = React.useState(localStorage.getItem("password") || "");
    const [confirmPassword, setConfirmPassword] = React.useState(localStorage.getItem("confirmPassword") || "");

    const handleSubmit = async () => {
        setLoading(true);
        email && localStorage.setItem("email", email);
        username && localStorage.setItem("username", username);
        shopname && localStorage.setItem("shopname", shopname);
        password && localStorage.setItem("password", password);
        confirmPassword && localStorage.setItem("password", password);

        if (count == 1 && email) {
            axios.post(`${endpoint}/credentials/client`, { email })
            .then(() => setCount(count + 1))
            .catch((error) => swalert(error.response.data.message, "info", 2500))
            .finally(() => setLoading(false));
        }

        if (count == 2 && username) {
            axios.post(`${endpoint}/credentials/client`, { username })
            .then(() => setCount(count + 1))
            .catch((error) => swalert(error.response.data.message, "info", 2500))
            .finally(() => setLoading(false));
        }

        if (count == 3 && shopname) {
            setCount(count + 1);
            setLoading(false);
        }

        if (count == 4 && password && confirmPassword) {
            if (password !== confirmPassword) {
                swalert("password dan konfirmasi password tidak sesuai!", "info", 2500);
                return setLoading(false);
            } else {
                axios.post(`${endpoint}/register/client`, { email, username, shopname, password, confirmPassword })
                .then((response) => {setMessage(response.data.message); setCount(count + 1)})
                .catch((error) => swalert(error.response.data.message, 'info', 2500))
                .finally(() => setLoading(false));
            }
        }

        if (count == 5 && OTP) {
            axios.post(`${endpoint}/confirm/client`, { OTP })
            .then( async (response) => {
                const res = await swalert(response.data.message);
                localStorage.removeItem("email");
                localStorage.removeItem("username");
                localStorage.removeItem("password");
                localStorage.removeItem("shopname");
                localStorage.removeItem("confirmPassword");
                res.isDismissed && navigate('/login')
            })
            .catch((error) => swalert(error.response.data.message))
            .finally(() => setLoading(false));
        } 

    }

    React.useEffect(() => { localStorage.setItem("count", count) }, [count])

    return (
        <div className="auth-page">
            {(count == 1) && <BackButton/>}
            <div className="left-auth-page"></div>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} className="right-auth-page">
                {(loading) ? <Loader/> : 
                <>
                    <img src="/img/logo.ico" width={60} alt="" />
                    <h1 style={{fontSize: '1.3rem', color: 'var(--text)'}}><span>Stress</span>lo</h1>


                    {(message && count == 4) ? 
                        <h3 style={{fontFamily: 'sans-serif', translate: '0 -5px', fontWeight: '400', marginBottom: "20px", marginTop: '10px', fontSize: '1rem', textAlign: 'center', width: '90%'}}>{message}</h3>
                        : <>
                        {(message && count == 5) ? 
                            <h3 style={{fontFamily: 'sans-serif', translate: '0 -5px', fontWeight: '400', marginBottom: "20px", marginTop: '10px', fontSize: '1rem', textAlign: 'center', width: '90%'}}>{message}</h3>
                        : 
                            <h3 style={{fontFamily: 'sans-serif', translate: '0 -5px', fontWeight: '400', marginBottom: "20px", opacity: "0.8"}}>Buat akun untuk <span>Melanjutkan</span></h3>
                        } </>
                    }

                    {(count == 1) && 
                        <div className='input-container'>
                            <div className='input-title'>Email : </div>
                            <input type="email" className='input' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                    }
                    
                    {(count == 2) && 
                        <div className='input-container'>
                            <div className='input-title'>Username : </div>
                            <input type="text" className='input' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        </div>
                    }

                    {(count == 3) && 
                        <div className='input-container'>
                            <div className='input-title'>Nama Toko/Usaha : </div>
                            <input type="text" className='input' value={shopname} onChange={(e) => setShopname(e.target.value)} required/>
                        </div>
                    }

                    {(count == 4) && 
                    <>
                        <div className='input-container'>
                            <div className='input-title'>Password : </div>
                            <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className='input-container' style={{marginTop: '10px'}}>
                            <div className='input-title'>Konfirmasi Password : </div>
                            <input className='input' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                    </>
                    }

                    {(count == 5) && 
                        <div className='input-container'>
                            <div className='input-title'>OTP Code : </div>
                            <input type="text" className='input' value={OTP} onChange={(e) => setOTP(e.target.value)} required/>
                        </div>
                    }

                    <div style={{display: 'flex', width: '90%', gap: '10px', alignItems: 'center'}}>
                        {(count !== 1) &&
                            <div onClick={() => setCount(count - 1)} className='button' style={{marginTop: '20px'}}>
                                <div className='fa-solid fa-caret-left fa-xl'></div>
                            </div>
                        }
                        <button type='submit' className='button' style={{marginTop: '20px', width: '100%'}}>
                            Berikutnya
                        </button>
                    </div>
                    {(count == 1) &&
                        <div onClick={() => authGoogle()} className='button' style={{marginTop: '5px', width: '90%', color: "var(--text)", backgroundColor: 'unset', border: '1px solid var(--text)'}}>
                            <img src="/img/google.png" width={18} alt="Google Logo" />
                            Lanjutkan dengan Google
                        </div>
                    }
                    <h3 style={{fontFamily: 'sans-serif', fontSize: "0.8rem", marginTop: '70px', marginBottom: '30px'}}>Sudah punya akun? <a onClick={() => navigate('/login')}>Masuk</a></h3>
                </>
                }
            </form>
        </div>
    )
}

export default Register;