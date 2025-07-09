import React from 'react'
import alam1 from "/img/alam1.webp"
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
           <Testimoni/>
            <footer className='page' style={{ backgroundColor: 'unset', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '35px 10px', boxSizing: 'border-box', fontFamily: 'var(--quicksand)', color: 'white', fontSize: '0.75rem', fontWeight: '800' }}>
                &copy; 2025 Trekkingsentul44. All rights reserved.
            </footer>
        </>
    )
}

export default LandingPage;