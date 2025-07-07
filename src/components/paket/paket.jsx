import React from 'react'
import trekData from '../../../data/trekData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
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
            <div id='bestPaket' className='page' style={{
                // background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), var(--background), rgba(0,0,0,0.9))`,
                backgroundColor: 'white',
                paddingBottom: '50px',
                paddingTop: '30px'
                }}>
                <h1 style={{ fontFamily: 'var(--quicksand)', fontSize: '1.8rem', color: 'var(--primary)', textAlign: 'center' }}>HIGHLIGHT</h1>
                <h1 style={{ fontFamily: 'var(--poppins)', fontSize: '1rem', color: '#808080', textAlign: 'center', marginBottom: '40px', fontWeight: '400' }}>zona wisata & rute lokasi trekking</h1>
                <div className='paket-card-container'>
                    <div className='paket-card-level'>
                        <div onClick={() => setLevel('easy')} style={{ fontFamily: 'var(--poppins)', fontWeight: '400', fontSize: '0.8rem', color: level == 'easy' ? 'var(--green)' : '#888888', cursor: 'pointer' }}>Easy</div>
                        <div onClick={() => setLevel('medium')} style={{ fontFamily: 'var(--poppins)', fontWeight: '400', fontSize: '0.8rem', color: level == 'medium' ? 'var(--yellow)' : '#888888', cursor: 'pointer' }}>Medium</div>
                        <div onClick={() => setLevel('semi-extreme')} style={{ fontFamily: 'var(--poppins)', fontWeight: '400', fontSize: '0.8rem', color: level == 'semi-extreme' ? 'var(--oren)' : '#888888', cursor: 'pointer' }}>Semi-extreme</div>
                        <div onClick={() => setLevel('extreme')} style={{ fontFamily: 'var(--poppins)', fontWeight: '400', fontSize: '0.8rem', color: level == 'extreme' ? 'var(--red)' : '#888888', cursor: 'pointer' }}>Extreme</div>
                    </div>
                    {(level == 'easy') && 
                    <div className='paket-card-wrapper'>
                        {(easyData.map((i, k) => {
                            return(
                                <div key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.95) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <div className='paket-card-title'>
                                        <div>{i.level}</div>
                                        <div>{i.title}</div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>}
                    {(level == 'medium') && 
                    <div className='paket-card-wrapper'>
                        {(mediumData.map((i, k) => {
                            return(
                                <div key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.98) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <div className='paket-card-title'>
                                        <div style={{color: 'var(--yellow)'}}>{i.level}</div>
                                        <div>{i.title}</div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>}
                    {(level == 'semi-extreme') && 
                    <div className='paket-card-wrapper'>
                        {(semiExtremeData.map((i, k) => {
                            return(
                                <div key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.98) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <div className='paket-card-title'>
                                        <div style={{color: 'var(--oren)'}}>{i.level}</div>
                                        <div>{i.title}</div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>}
                    {(level == 'extreme') && 
                    <div className='paket-card-wrapper'>
                        {(extremeData.map((i, k) => {
                            return(
                               <div key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.98) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <div className='paket-card-title'>
                                        <div style={{color: 'var(--red)'}}>{i.level}</div>
                                        <div>{i.title}</div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>}
                </div>
            </div>
            <div id='paket' className='page' style={{ backgroundColor: 'transparent', padding: '0 10px' }}>
                <h1 style={{ fontFamily: 'var(--quicksand)', fontSize: '1.8rem', color: 'white', textAlign: 'center', marginTop: '40px' }}>PAKET TREKKING</h1>
                <h1 style={{ fontFamily: 'var(--poppins)', fontSize: '1rem', color: 'white', textAlign: 'center', marginBottom: '40px', fontWeight: '400' }}>tersedia mulai dari easy sampai extreme!</h1>
                <Swiper
                style={{
                '--swiper-navigation-color': width <= 550 ? 'var(--primary)' : 'white',
                '--swiper-pagination-color': 'white',
                }}
                // loop={true}
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
                    // background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.95)), url('img/img7.jpeg')`, 
                    backgroundColor: 'transparent',
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover'
                }}
                data-swiper-parallax="-23%"
                ></div>
                {trekData.map((i,k) => {
                    return(
                        <SwiperSlide key={k} className='swiper-paket'style={{paddingTop: '0'}}>
                            <div className='swiper-konten'>
                                <div className='swiper-konten-title'><span style={{color: i.color}}>PAKET</span></div>
                                <div className='swiper-konten-title'><span style={{color: i.color}}>{i.title}</span></div>
                                {i.type && <div style={{ width: 'max-content', padding: '5px 30px', backgroundColor: i.color, fontFamily: 'var(--quicksand)', fontWeight: 'bold', color: 'white', fontSize: '1.1rem', borderRadius: '50px', boxSizing: 'border-box' }}>{i.type}</div>}
                                {/* <div className='swiper-konten-desc'>{sliceText(i.desc)}</div> */}
                                    <div style={{ marginTop:'40px' }} className='swiper-kotak-harga'>
                                        <div>Mulai dari</div>
                                        <div>{i.harga}</div>
                                    </div>
                                <div onClick={() => navigate('/paket/detail', { state: i })} className='button' style={{ width: '200px', backgroundColor: i.color, marginTop: '10px', gap: '10px', fontWeight: '550', fontSize: '0.85rem' }}>
                                    Detail paket
                                    <div className='fas fa-arrow-right fa-md'></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>
            <SwiperCard/>
            <div id='tentang' className='page' 
                style={{ 
                    // background: "linear-gradient(to bottom, rgba(0,0,0,0.98), rgba(0,0,0,0.45), rgba(0,0,0,0.98)), url('img/img3.jpeg')", 
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
                <div className='box-large'>
                    <div style={{ color: 'var(--primary)', fontFamily: 'sans-serif', fontSize: '1.7rem', fontWeight: '600' }}><span>TREKKING SENTUL 44</span> </div>
                    <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'var(--quicksand)', color: 'var(--primary)', fontSize: '0.9rem', gap: '10px', marginTop: '20px', fontWeight: '600'}}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-md'/>
                            <div>Provider Resmi dan sudah berizin</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-md'/>
                            <div>Berisi Tim dan Pemandu Profesional</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-md'/>
                            <div>Asuransi & Kesehatan</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-md'/>
                            <div>Perlengkapan & Include lengkap</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-md'/>
                            <div>Jaminan Uang Kembali</div>
                        </div>
                    </div>
                    <div style={{ color: 'var(--primary)', fontFamily: 'var(--quicksand)', fontSize: '0.9rem', marginTop: '25px', lineHeight: '1.85', fontWeight: '600'}}>
                        Ayo Jelajahi Keajaiban Alam Sentul!
                        Bergabunglah bersama kami dalam petualangan seru yang penuh keindahan alam! Rasakan sensasi menjelajahi hutan tropis yang asri, segarnya cipratan air terjun alami, dan panorama perbukitan yang memukau.
                        Di TrekkingSentul44 setiap langkah adalah cerita, setiap momen adalah kenangan tak terlupakan.
                        Siapkan dirimu alam sedang memanggil!
                    </div>
                </div>
                <div className='box-container'>
                    <div className='box-small'>
                        <div className='fas fa-map fa-lg' style={{color: 'var(--green)'}}></div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>20+</div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '500', textAlign: 'center' }}>Rute Spesial Kami</div>
                    </div>
                    <div className='box-small'>
                        <div className='fas fa-note-sticky fa-lg' style={{color: 'var(--green)'}}></div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>2500+</div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '500', textAlign: 'center' }}>Client trekking bersama kami</div>
                    </div>
                    <div className='box-small'>
                        <div className='fas fa-clock fa-lg' style={{color: 'var(--green)'}}></div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>5+</div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '500', textAlign: 'center' }}>Tahun Kami menjadi provider</div>
                    </div>
                    <div className='box-small'>
                        <div className='fas fa-person-walking fa-xl' style={{color: 'var(--green)'}}></div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>45+</div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '500', textAlign: 'center' }}>Tour Guide Profesional</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paket