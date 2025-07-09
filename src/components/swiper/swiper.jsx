import React from 'react'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'

const SwiperCard = () => {
    return (
        <section className='page' style={{ backgroundColor: 'white', paddingTop: '30px' }}>
            <h1 style={{ fontFamily: 'var(--quicksand)', fontSize: '1.8rem', color: 'var(--primary)', textAlign: 'center' }}>
                Gallery Trekking Sentul
            </h1>
            <h2 style={{ fontFamily: 'var(--poppins)', fontWeight: '400', fontSize: '1rem', color: '#808080', textAlign: 'center' }}>
                Dokumentasi perjalanan para client kami
            </h2>

            <Swiper
                effect={'coverflow'}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={700}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -50,
                    depth: 350,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
                style={{
                    '--swiper-pagination-color': 'var(--primary)',
                    height: 'max-content',
                    backgroundColor: 'white',
                    paddingTop: '20px',
                    paddingBottom: '0'
                }}
            >
                {Array.from({ length: 10 }).map((_, i) => {
                    return (
                        <SwiperSlide
                            key={i}
                            style={{
                                borderRadius: '7px',
                                backgroundPosition: 'center',
                                width: '300px',
                                height: '190px',
                                backgroundSize: 'cover',
                            }}
                        >
                            <img
                                src={`img/img${i + 1}.webp`}
                                alt={`Galeri trekking Sentul foto ${i + 1}`}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <Swiper
                effect={'coverflow'}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                speed={700}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -50,
                    depth: 350,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
                style={{
                    '--swiper-pagination-color': 'var(--primary)',
                    height: 'max-content',
                    backgroundColor: 'white',
                    paddingTop: '20px',
                    paddingBottom: '40px'
                }}
            >
                {Array.from({ length: 10 }).map((_, i) => {
                    return (
                        <SwiperSlide
                            key={i}
                            style={{
                                borderRadius: '7px',
                                backgroundPosition: 'center',
                                width: '300px',
                                height: '190px',
                                backgroundSize: 'cover',
                            }}
                        >
                            <img
                                src={`img/img${i + 10}.webp`}
                                alt={`Galeri trekking Sentul foto ${i + 11}`}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default SwiperCard;