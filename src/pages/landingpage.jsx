import React from 'react'
import alam1 from "/img/alam1.jpg"
import Hero from '../components/hero/hero'
import Paket from '../components/paket/paket'
import Navbar from '../components/navbar/navbar'
import Navmobile from '../components/navbar/navmobile'
import Testimoni from '../components/testimoni/testimoni'
import "./landingpage.css"

const LandingPage = () => {
    const homeRef = React.useRef();

    React.useEffect(() => {
        if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    }, []);
    return (
        <>
            <div ref={homeRef} className='single-page'>
                <div className='wrapper-background'>
                    <div className='landing-background' style={{  
                        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.95)), url(${alam1})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}></div>
                </div>
                <Navmobile/>
                <Navbar/>
                <Hero/>
            </div>
           <Paket/>
           <div className='page' style={{backgroundColor: 'white', padding: '20px', paddingBottom: '50px', boxSizing: 'border-box', marginBottom: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h1 style={{ fontFamily: 'var(--quicksand)', fontSize: '1.8rem', color: 'var(--primary)', textAlign: 'center' }}>LOKASI</h1>
                <h1 style={{ fontFamily: 'var(--poppins)',fontWeight: '400', fontSize: '1rem', color: '#808080', textAlign: 'center' }}>Titik point Trekking Sentul 44</h1>
                <iframe style={{ borderRadius: '5px', borderStyle: 'none', border: '1px solid var(--text)',marginTop: '20px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.8942904487618!2d106.89187218356557!3d-6.574926329112105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c7d027c409f7%3A0x98394f37ea70c074!2sTrekking%20Sentul!5e0!3m2!1sid!2sid!4v1751877085726!5m2!1sid!2sid" width="100%" height="450" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
           <Testimoni/>
            <footer className='page' style={{ backgroundColor: 'unset', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '35px 10px', boxSizing: 'border-box', fontFamily: 'var(--quicksand)', color: 'white', fontSize: '0.75rem', fontWeight: '800' }}>
                &copy; 2025 Trekkingsentul44. All rights reserved.
            </footer>
        </>
    )
}

export default LandingPage;