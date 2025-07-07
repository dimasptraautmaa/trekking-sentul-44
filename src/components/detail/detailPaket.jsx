import React from 'react'
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLocation, useNavigate } from 'react-router-dom'
import BackButton from '../backButton/backButton';
import "./detailPaket.css"
import Swal from 'sweetalert2';

const DetailPaket = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const i = location.state;
    if (!i) return window.location.href = '/'
    const images = i.img;
    const chat = `https://wa.me/6285880762819?text=${i.msg}`
    const [scrollY, setScrollY] = React.useState(0);

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [visible, setVisible] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const [fade, setFade] = React.useState(true);


    const order = async (title, type, color) => {
        return Swal.fire({
            // titleText: type + "\n" + title ,
            imageUrl: '/img/logo.png',
            imageWidth: 100,
            imageHeight: 100,
            text: `Kamu akan diarahkan ke whatsapp untuk paket ${title} ${type}, apakah kamu yakin?`,
            color: "var(--primary)",
            iconColor: 'var(--primary)',
            background: "white",
            customClass: { container: "alertext" },
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonText: "Ya, Lanjutkan",
            cancelButtonText: "Batalkan",
            confirmButtonColor: color
        }).then((res) => {
            if (res.isConfirmed) {
                window.open(chat);
            }
        });
    }

    React.useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setScrollY(y);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    React.useEffect(() => {
        const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
        }, 600);
        }, 7000);
        return () => clearInterval(interval);
    }, [images.length])

    return (
        <div className='page' style={{ height: '100vh', position: 'relative' }}>
            <PhotoSlider
                images={images.map((src) => ({
                src,
                key: src,
                }))}
                visible={visible}
                onClose={() => {setVisible(false)}}
                index={index}
                onIndexChange={setIndex}
            />
            <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', padding: '15px 20px', boxSizing: 'border-box', zIndex: '10', display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center', marginTop: '5px' }}>
                <div onClick={() => navigate(-1)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'var(--quicksand)', gap: '7px', cursor: 'pointer' }}>
                    <div className='fas fa-caret-left fa-xl'></div>
                    <div>Kembali</div>
                </div>
                <div onClick={() => setVisible(true)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'var(--quicksand)', gap: '7px', cursor: 'pointer' }}>
                    <div className='fas fa-circle-play fa-md'></div>
                    <div>Preview</div>
                </div>
            </div>
            <div onClick={() => setVisible(true)} style={{ width: '100%', height: '50%', backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${images[currentIndex]})`, position: 'fixed', top: '0', left: '0', backgroundPosition: 'center',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity: fade ? '1' : '0', transition: 'opacity 1s ease-in-out', display: 'flex', justifyContent: 'center', alignItems: 'center' }}/>
            <div className='detail-paket'>
                <div className='detail-paket-container'>
                    <div id='title' style={{ fontFamily: 'var(--quicksand)', color: i.color, fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>{i.title.split("",(4))} {i.title.split(" ")[1]}</div>
                        <div id='type' style={{ fontFamily: 'var(--poppins)', color: 'var(--primary)', fontSize: '1.1rem', textAlign: 'center', transform: 'translateY(-5px)' }}>{i.type ? `( ${i.type} )` : ''}</div>
                        <div id='jarak' className='swiper-kotak-jarak'>
                            <div style={{display: 'flex', gap: '7px', alignItems: 'center'}}>
                                <span style={{color: i.color}}><div className='fas fa-map-location-dot fa-sm'/></span>
                                <div>{i.jarak}</div>
                            </div>
                            <div style={{display: 'flex', gap: '7px', alignItems: 'center'}}>
                                <span style={{color: i.color}}><div className='fas fa-clock fa-sm'/></span>
                                <div>{i.waktu}</div>
                            </div>
                        </div>
                        <div className='swiper-kotak-rute'>
                            <div id='firstShow' style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                                <div className='circle glass'><div className='fas fa-circle-info fa-sm'/></div>
                                Syarat & Ketentuan
                            </div>
                            <div id='firstShow' style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                <div className='flex-gap-inline'>
                                    <div>•</div>
                                    <div>Minimal 3 Orang</div>
                                </div>
                                <div className='flex-gap-inline'>
                                    <div>•</div>
                                    <div>Rute menyesuaikan paket</div>
                                </div>
                                <div className='flex-gap-inline'>
                                    <div>•</div>
                                    <div>Sudah termasuk Guide & Dokumentasi</div>
                                </div>
                                <div className='flex-gap-inline'>
                                    <div>•</div>
                                    <div>Jadwal Flexibel (by request)</div>
                                </div>
                            </div>
                            <div id='firstShow' style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                                <div className='circle glass'><div className='fas fa-location-dot fa-sm'/></div>
                                Rute yang bakal kamu lewatin :
                            </div>
                            <div id='firstShow' style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                {i.rute.map((r, rkey) => {
                                    return(
                                        <div className='flex-gap-inline' key={rkey}>
                                            <div>•</div>
                                            <div>{r}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            {i.wisata && i.wisata[1] && 
                                <>
                                <div id='secondShow' style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                                    <div className='circle glass'><div className='fas fa-location-dot fa-sm'></div></div>
                                    Zona wisata ke - 1
                                </div>
                                <div id='secondShow' style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                    {i.wisata[1].map((s, skey) => {
                                        return(
                                            <div className='flex-gap-inline' key={skey}>
                                                <div>•</div>
                                                <div>{s}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                </>
                            }
                            {i.wisata && i.wisata[2] && 
                                <>
                                <div id='secondShow' style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                                    <div className='circle glass'><div className='fas fa-location-dot fa-sm'></div></div>
                                    Zona wisata ke - 2
                                </div>
                                <div id='secondShow' style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                    {i.wisata[2].map((d, dkey) => {
                                        return(
                                            <div className='flex-gap-inline' key={dkey}>
                                                <div>•</div>
                                                <div>{d}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                </>
                            }
                            {i.wisata && i.wisata[3] && 
                                <>
                                <div id='secondShow' style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                                    <div className='circle glass'><div className='fas fa-location-dot fa-sm'></div></div>
                                    Zona wisata ke - 3
                                </div>
                                <div id='secondShow' style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                    {i.wisata[3].map((t, tkey) => {
                                        return(
                                            <div className='flex-gap-inline' key={tkey}>
                                                <div>•</div>
                                                <div>{t}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                </>
                            }
                            {i.step && i.step.map((st, stkey) => {
                                return(
                                    <>
                                    <div key={stkey} id={!i.wisata ? "secondShow" : "thirdShow"} style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                                        <div className='circle glass'><div className='fas fa-location-dot fa-sm'></div></div>
                                        {st.title}
                                    </div>
                                    <div id={!i.wisata ? "secondShow" : "thirdShow"} style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                        {(st.destination.map((de, dekey) => {
                                            return(
                                                <div className='flex-gap-inline' key={dekey}>
                                                    <div>•</div>
                                                    <div>{de}</div>
                                                </div>
                                            )
                                        }))}
                                    </div>
                                    </>
                                )
                            })}
                            <div id={!i.wisata ? "secondShow" : "thirdShow"} style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                                <div className='circle glass'><div className='fas fa-box-open fa-sm'></div></div>
                                Fasilitas yang kamu dapat :
                            </div>
                            <div id={!i.wisata ? "secondShow" : "thirdShow"} style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                {i.pack.map((p, pkey) => {
                                    return(
                                        <div className='flex-gap-inline' key={pkey}>
                                            <div>•</div>
                                            <div>{p}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                </div>
            </div>
            <div className='abs-button' style={{ opacity: scrollY > 200 ? '1' : '0' }}>
                <div className='button' style={{ width: '50%', borderRadius: '0px', height: '50px', fontSize: '0.9rem', backgroundColor: 'unset', gap: '5px', borderRadius: '10px', fontWeight: 'bold' }}>
                    {i.harga}
                </div>
                <div className='button' style={{ width: '50%', borderRadius: '0px', height: '50px', fontSize: '0.85rem', backgroundColor: i.color, gap: '5px', borderRadius: '10px' }} onClick={() => order(i.title, i.type, i.color)}>
                    <div className='fab fa-whatsapp fa-xl'/>
                    Pesan paket
                </div>
            </div>
        </div>
    )
}

export default DetailPaket