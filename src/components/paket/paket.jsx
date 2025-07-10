import React from 'react'
import trekData from '../../../data/trekData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { easyData, extremeData, mediumData, semiExtremeData } from '../../../data/dataByLevel';

import 'swiper/css';
import './paket.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import SwiperCard from '../swiper/swiper';

const Paket = () => {

    const navigate = useNavigate();
    const [ level, setLevel ] = React.useState('easy');
    const [ width, setWidth ] = React.useState(window.innerWidth);
    const [ initialSlide, setInitialSlide ] = React.useState(localStorage.getItem('lastSlide') | 0);

    return (
        <>
            <section id='bestPaket' className='page' style={{
                backgroundColor: 'white',
                paddingBottom: '50px',
                paddingTop: '30px'
                }}>
                <h1 style={{ fontFamily: 'var(--quicksand)', fontSize: '1.8rem', color: 'var(--primary)', textAlign: 'center' }}>
                    Highlight Paket Trekking Sentul
                </h1>
                <h2 style={{ fontFamily: 'var(--poppins)', fontSize: '1rem', color: '#808080', textAlign: 'center', marginBottom: '40px', fontWeight: '400' }}>
                    Zona Wisata & Rute Lokasi Trekking di Sentul
                </h2>
                <div className='paket-card-container'>
                    <nav className='paket-card-level'>
                        <div onClick={() => setLevel('easy')} style={{ fontFamily: 'var(--poppins)', fontWeight: '400', fontSize: '0.8rem', color: level == 'easy' ? 'var(--green)' : '#888888', cursor: 'pointer' }}>Easy</div>
                        <div onClick={() => setLevel('medium')} style={{ fontFamily: 'var(--poppins)', fontWeight: '400', fontSize: '0.8rem', color: level == 'medium' ? 'var(--yellow)' : '#888888', cursor: 'pointer' }}>Medium</div>
                        <div onClick={() => setLevel('semi-extreme')} style={{ fontFamily: 'var(--poppins)', fontWeight: '400', fontSize: '0.8rem', color: level == 'semi-extreme' ? 'var(--oren)' : '#888888', cursor: 'pointer' }}>Semi-extreme</div>
                        <div onClick={() => setLevel('extreme')} style={{ fontFamily: 'var(--poppins)', fontWeight: '400', fontSize: '0.8rem', color: level == 'extreme' ? 'var(--red)' : '#888888', cursor: 'pointer' }}>Extreme</div>
                    </nav>
                    {(level == 'easy') && 
                    <div className='paket-card-wrapper'>
                        {(easyData.map((i, k) => {
                            return(
                                <article key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.95) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <header className='paket-card-title'>
                                        <h3  style={{color: 'var(--green)'}}>{i.level}</h3>
                                        <h4>{i.title}</h4>
                                    </header>
                                </article>
                            )
                        }))}
                    </div>}
                    {(level == 'medium') && 
                    <div className='paket-card-wrapper'>
                        {(mediumData.map((i, k) => {
                            return(
                                <article key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.98) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <header className='paket-card-title'>
                                        <h3 style={{color: 'var(--yellow)'}}>{i.level}</h3>
                                        <h4>{i.title}</h4>
                                    </header>
                                </article>
                            )
                        }))}
                    </div>}
                    {(level == 'semi-extreme') && 
                    <div className='paket-card-wrapper'>
                        {(semiExtremeData.map((i, k) => {
                            return(
                                <article key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.98) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <header className='paket-card-title'>
                                        <h3 style={{color: 'var(--oren)'}}>{i.level}</h3>
                                        <h4>{i.title}</h4>
                                    </header>
                                </article>
                            )
                        }))}
                    </div>}
                    {(level == 'extreme') && 
                    <div className='paket-card-wrapper'>
                        {(extremeData.map((i, k) => {
                            return(
                               <article key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.98) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <header className='paket-card-title'>
                                        <h3 style={{color: 'var(--red)'}}>{i.level}</h3>
                                        <h4>{i.title}</h4>
                                    </header>
                                </article>
                            )
                        }))}
                    </div>}
                </div>
            </section>
            <section id='paket' className='page' style={{ backgroundColor: 'transparent', padding: '0 10px' }}>
                <h2 style={{ fontFamily: 'var(--quicksand)', fontSize: '1.8rem', color: 'white', textAlign: 'center', marginTop: '40px' }}>
                    PAKET TREKKING SENTUL
                </h2>
                <h3 style={{ fontFamily: 'var(--poppins)', fontSize: '1rem', color: 'white', textAlign: 'center', marginBottom: '40px', fontWeight: '400' }}>
                    Tersedia mulai dari easy sampai extreme, cocok untuk pemula dan petualang sejati!
                </h3>
                <Swiper
                    style={{
                        '--swiper-navigation-color': width <= 550 ? 'var(--primary)' : 'white',
                        '--swiper-pagination-color': 'white',
                    }}
                    grabCursor={true}
                    initialSlide={initialSlide}
                    onSlideChange={(swiper) => {
                        localStorage.setItem('lastSlide', swiper.activeIndex);
                    }}
                    speed={700}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{ 
                            backgroundColor: 'transparent',
                            backgroundPosition: 'center', 
                            backgroundSize: 'cover'
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    {trekData.map((i,k) => {
                        return(
                            <SwiperSlide key={k} className='swiper-paket' style={{paddingTop: '0'}}>
                                <div className='swiper-konten'>
                                    <h3 className='swiper-konten-title'><span style={{color: i.color}}>PAKET TREKKING</span></h3>
                                    <h4 className='swiper-konten-title'><span style={{color: i.color}}>{i.title.split(" ")[1]}</span></h4>
                                    {i.type && 
                                    <div style={{ width: 'max-content', padding: '5px 30px', backgroundColor: i.color, fontFamily: 'var(--quicksand)', fontWeight: 'bold', color: 'white', fontSize: '1.1rem', borderRadius: '50px', boxSizing: 'border-box' }}>
                                        {i.type}
                                    </div>}
                                    <div style={{ marginTop:'40px' }} className='swiper-kotak-harga'>
                                        <div>Mulai dari</div>
                                        <div>{i.harga}</div>
                                    </div>
                                    <div onClick={() => navigate(`detail/${i.level}`, { state: i })} className='button' style={{ width: '200px', backgroundColor: i.color, marginTop: '10px', gap: '10px', fontWeight: '550', fontSize: '0.85rem' }}>
                                        Detail paket
                                        <div className='fas fa-arrow-right fa-md'></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>
            <SwiperCard/>
            <section id='tentang' className='page' 
                style={{ 
                    backgroundColor: 'transparent',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    padding: width <= 550 ? "50px 0px" : '50px 20px',
                    flexDirection: 'column',
                    display: 'flex',
                    gap: '15px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <header className='box-large'>
                    <h2 style={{ color: 'var(--primary)', fontFamily: 'sans-serif', fontSize: '1.7rem', fontWeight: '600' }}>
                        TREKKING SENTUL 44
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'var(--quicksand)', color: 'var(--primary)', fontSize: '0.9rem', gap: '10px', marginTop: '20px', fontWeight: '600'}}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-md'/>
                            <div>Provider resmi dan berizin</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-md'/>
                            <div>Berisi tim dan pemandu profesional</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-md'/>
                            <div>Asuransi & kesehatan</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-md'/>
                            <div>Perlengkapan lengkap & include</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-md'/>
                            <div>Jaminan uang kembali</div>
                        </div>
                    </div>
                    <p style={{ color: 'var(--primary)', fontFamily: 'var(--quicksand)', fontSize: '0.9rem', marginTop: '25px', lineHeight: '1.85', fontWeight: '600'}}>
                        Ayo jelajahi keajaiban alam Sentul bersama TrekkingSentul44! Rasakan sensasi trekking melewati hutan tropis, air terjun alami, dan pemandangan perbukitan memukau. Setiap langkah adalah petualangan seru, cocok bagi pemula maupun pencinta alam sejati.
                    </p>
                </header>
                <div className='box-container'>
                    <div className='box-small'>
                        <div className='fas fa-map fa-lg' style={{color: 'var(--green)'}}></div>
                        <h3 style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>20+</h3>
                        <p style={{ fontFamily: 'var(--poppins)', fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '500', textAlign: 'center' }}>Rute Spesial Kami</p>
                    </div>
                    <div className='box-small'>
                        <div className='fas fa-note-sticky fa-lg' style={{color: 'var(--green)'}}></div>
                        <h3 style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>2500+</h3>
                        <p style={{ fontFamily: 'var(--poppins)', fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '500', textAlign: 'center' }}>Client trekking bersama kami</p>
                    </div>
                    <div className='box-small'>
                        <div className='fas fa-clock fa-lg' style={{color: 'var(--green)'}}></div>
                        <h3 style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>5+</h3>
                        <p style={{ fontFamily: 'var(--poppins)', fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '500', textAlign: 'center' }}>Tahun kami menjadi provider</p>
                    </div>
                    <div className='box-small'>
                        <div className='fas fa-person-walking fa-xl' style={{color: 'var(--green)'}}></div>
                        <h3 style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>45+</h3>
                        <p style={{ fontFamily: 'var(--poppins)', fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '500', textAlign: 'center' }}>Tour Guide Profesional</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Paket;