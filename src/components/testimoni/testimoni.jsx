import React from 'react'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import testimoniData from './testimoniData';

const Testimoni = () => {
    return (
        <div className='page'>
            <h1 style={{ fontFamily: 'var(--quicksand)', fontSize: '2rem', textAlign: 'center', color: 'var(--green)' }}>TESTIMONI</h1>
            <div style={{ fontFamily: 'var(--quicksand)', color: 'white', textAlign: 'center', fontSize: '1.1rem' }}>dari client kami</div>
            <Swiper
                effect={'coverflow'}
                speed={700}
                grabCursor={true}
                centeredSlides={true}
                initialSlide={2}
                slidesPerView={'auto'}          
                pagination={true}
                coverflowEffect={{
                rotate: 0,
                stretch: -50,
                depth: 350,
                modifier: 1,
                slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
                style={{ height: '300px', '--swiper-pagination-color': 'var(--green)',paddingBottom: '50px', marginTop: '30px' }}
            >
                {testimoniData.map((i, key) => {
                    return(
                    <SwiperSlide 
                    key={key} 
                    style={{
                        borderRadius: '7px', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        width: '230px', 
                        height: '300px', 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '15px 10px',
                        boxSizing: 'border-box',
                        backgroundColor: 'white'
                    }}
                    >
                        <div style={{ width: '50px', height: '50px', position: 'relative', backgroundColor: 'white', borderRadius: '50%', border: '3px solid var(--green)' }}>
                            <img src={i.img} style={{ borderRadius: '50%' }} alt="" />
                        </div>
                        <div style={{ fontSize: '1.1rem', color: 'var(--green)', fontFamily: 'var(--quicksand)', fontWeight: '600' }}>{i.name}</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontFamily: 'var(--quicksand)', textAlign: 'center', marginTop: '15px', fontWeight: '500' }}>{i.desc}</div>
                    </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimoni;