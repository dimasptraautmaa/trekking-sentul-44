import React from 'react';
import "./navmobile.css";
import { NavLink } from 'react-router-dom';
import Context from '../../../utils/context';
import axios from 'axios';
import swalert from '../../../utils/swalert';
import Loader from '../../../utils/loader';

const Navmobile = () => {

    const path = location.pathname;
    const endpoint = import.meta.env.VITE_API;
    const context = React.useContext(Context);
    const mail = "mailto:ibdafauzan85@gmail.com"
    const chat = `https://wa.me/6285880762819?text="Halo%20min%2C%20saya%20mau%20tanya%20/%20pesan%20paket%20trekking%20paling%20recommended"`
    const ig = "https://instagram.com/trekkingsentul44"

    const [loading, setLoading] = React.useState(false);
    const [notification, setNotification] = React.useState([]);

    const hide = () => {
        const navmobile = document.querySelector('.navmobile');
        navmobile.classList.remove('show');
    }

    const handleclick = () => {
        const navmobile = document.querySelector('.navmobile');
        navmobile.classList.contains('show') && navmobile.classList.remove('show');
    }

    // React.useEffect(() => {
    //     const navmobile = document.querySelector('.navmobile');
    //     navmobile.classList.contains('show') && navmobile.classList.remove('show');
    // }, [path])

    if (loading) return <Loader/>

    return (
        <div onClick={() => handleclick()} className='navmobile glass'>
            <div className='top-nav'>
                <div className='nav-logo'>
                    <img src="/img/logo.png" width={28} alt="stresslo logo" />
                    <h1 style={{color: 'white', fontWeight: '500', fontSize: '1rem'}}>Trekkingsentul44</h1>
                </div>
                <div className='fa-solid fa-xmark fa-xl' onClick={() => hide()} style={{color: 'white'}}></div>
            </div>
            <div className='bot-nav'>
                <a href='#tentang' className='bot-nav-item glass' style={{boxShadow: 'unset'}}>
                    <div className='fa-solid fa-circle-info fa-lg'></div>
                    <h1 style={{fontSize: '0.8rem', color: 'white', fontFamily: 'sans-serif'}}>Tentang Kami</h1>
                </a>
                <a href='#paket' className='bot-nav-item glass ' style={{boxShadow: 'unset'}}>
                    <div className='fa-solid fa-list fa-lg'></div>
                    <h1 style={{fontSize: '0.8rem', color: 'white', fontFamily: 'sans-serif'}}>Paket Trecking</h1>
                </a>
                <a href='#bestPaket' className='bot-nav-item glass ' style={{boxShadow: 'unset'}}>
                    <div className='fa-solid fa-fire fa-lg'></div>
                    <h1 style={{fontSize: '0.8rem', color: 'white', marginLeft: '2px', fontFamily: 'sans-serif'}}>Highlight</h1>
                </a>
            </div>
            <div className='bot-nav'>
                <NavLink onClick={() => window.open(ig)} className='bot-nav-item glass' style={{boxShadow: 'unset'}}>
                    <div className='fab fa-instagram fa-lg'></div>
                    <h1 style={{fontSize: '0.8rem', color: 'white', fontFamily: 'sans-serif'}}>Instagram</h1>
                </NavLink>
                <NavLink onClick={() => window.open(chat)} className='bot-nav-item glass' style={{boxShadow: 'unset'}}>
                    <div className='fab fa-whatsapp fa-lg'></div>
                    <h1 style={{fontSize: '0.8rem', color: 'white', marginLeft: '2px', fontFamily: 'sans-serif'}}>Whatsapp</h1>
                </NavLink>
                <NavLink onClick={() => window.open(mail)} className='bot-nav-item glass' style={{boxShadow: 'unset'}}>
                    <div className='fa-solid fa-envelope fa-md'></div>
                    <h1 style={{fontSize: '0.8rem', color: 'white', fontFamily: 'sans-serif'}}>Email</h1>
                </NavLink>
            </div>
            {/* <div className='mid-nav-notification'>
                <h1 style={{fontSize: '1rem', color: 'var(--text)', fontFamily: 'sans-serif'}}>Notification</h1>
                <div style={{width: '100%', height: "200px", marginTop: '10px', boxShadow: 'unset', border: '1px solid var(--prime)', borderRadius: '4px'}}>
                    {(!notification.length) ?
                    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text)', fontSize: '0.9rem', fontFamily: 'sans-serif'}}>
                        No recent notification
                    </div>
                    :
                    <div className='nav-notification'>
                        <div className='notification-item'>
                            <h1 style={{fontFamily: 'sans-serif', fontSize: '0.85rem', color: 'var(--text)'}}>contoh</h1>
                            <div className='notification-item-wrapper'>
                                <h1 style={{fontFamily: 'sans-serif', fontSize: '0.6rem', color: 'var(--text)'}}>7 Aug 2022</h1>
                                <h1 style={{fontFamily: 'sans-serif', fontSize: '0.6rem', color: 'var(--text)'}}>19.37</h1>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div className='mid-nav-route'>
                <NavLink className='nav-route-item'>
                    <div className='box-route-item '>
                        <div className='fa-solid fa-circle-info fa-lg'></div>
                    </div>
                    <div className='text-route-item'>About</div>
                </NavLink>
                <NavLink className='nav-route-item'>
                    <div className='box-route-item '>
                        <div className='fa-brands fa-teamspeak fa-lg'></div>
                    </div>
                    <div className='text-route-item'>T&C</div>
                </NavLink>
                <NavLink className='nav-route-item'>
                    <div className='box-route-item'>
                        <div className='fa-solid fa-envelope fa-lg'></div>
                    </div>
                    <div className='text-route-item'>Contact</div>
                </NavLink>
                <NavLink className='nav-route-item'>
                    <div className='box-route-item'>
                        <div className='fa-solid fa-triangle-exclamation fa-lg'></div>
                    </div>
                    <div className='text-route-item'>Report</div>
                </NavLink>
            </div>
            <div className='bot-nav' style={{marginTop: '30px'}}>
                {(context.token) &&
                <NavLink onClick={() => logout()} className='bot-nav-item' style={{boxShadow: 'unset'}}>
                    <div className='fa-solid fa-right-from-bracket fa-lg'></div>
                    <h1 style={{fontSize: '0.8rem', color: 'var(--yellow)', fontFamily: 'sans-serif'}}>Keluar</h1>
                </NavLink>
                }
            </div> */}
        </div>
    )
}

export default Navmobile