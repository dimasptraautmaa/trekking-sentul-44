import React from 'react';
import trekData from "../../../data/trekData"
import { Helmet } from 'react-helmet';
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Type = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { type } = useParams();
    
    const typeMap = {
        "easy-a" : 0,
        "easy-b" : 1,
        "easy-c" : 2,
        "easy-d" : 3,
        "medium-a" : 4,
        "medium-b" : 5,
        "medium-c" : 6,
        "medium-d" : 7,
        "semi-extreme" : 8,
        "extreme" : 9,
    }

    const i = trekData[typeMap[type]] || null;
    if (!i) return window.location.href = "/"
    const fullUrl = `https://trekkingsentul44.com/detail/${type}`;
    const images = i.img;
    const chat = `https://wa.me/6285880762819?text=${i.msg}`;

    const [scrollY, setScrollY] = React.useState(0);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [visible, setVisible] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const [fade, setFade] = React.useState(true);

    const order = async (title, type, color) => {
        return Swal.fire({
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
    };

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
                setFade(true);
            }, 600);
        }, 7000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
        <Helmet>
            <title>{i.title} | Trekking Sentul 44</title>
            <meta name="description" content={`Jalur ${i.type} - ${i.title}. ${i.jarak}, durasi ${i.waktu}. ${i.pack.join(", ")}`} />
            <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            <link rel="canonical" href={fullUrl} />

            <meta property="og:title" content={`${i.title} | Trekking Sentul 44`} />
            <meta property="og:description" content={`Paket ${i.title} jalur ${i.type}, rute menarik & fasilitas lengkap. Booking mudah!`} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={i.img?.[0]} />
        </Helmet>

        <main className='page' style={{ height: '100vh', position: 'relative' }}>
            <PhotoSlider
                images={images.map((src) => ({ src, key: src }))}
                visible={visible}
                onClose={() => setVisible(false)}
                index={index}
                onIndexChange={setIndex}
            />

            <nav style={{
                position: 'fixed', top: 0, left: 0, width: '100%',
                padding: '15px 20px', boxSizing: 'border-box',
                zIndex: 10, display: 'flex', justifyContent: 'space-between',
                gap: '10px', alignItems: 'center', marginTop: '5px'
            }}>
                <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', color: 'white', fontFamily: 'var(--quicksand)', gap: '7px', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <i className='fas fa-caret-left fa-xl'></i>
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>Kembali</span>
                </button>
                <button onClick={() => setVisible(true)} style={{ display: 'flex', alignItems: 'center', color: 'white', fontFamily: 'var(--quicksand)', gap: '7px', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <i className='fas fa-circle-play fa-lg'></i>
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>Preview</span>
                </button>
            </nav>

            <section
                onClick={() => setVisible(true)}
                style={{
                    width: '100%', height: '50%',
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${images[currentIndex]})`,
                    position: 'fixed', top: 0, left: 0,
                    backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', opacity: fade ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}
            />

            <section className='detail-paket'>
                <article className='detail-paket-container'>
                    <h1 id='title' style={{ fontFamily: 'var(--quicksand)', color: i.color, fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
                        {i.title.split("", 4)} {i.title.split(" ")[1]}
                    </h1>
                    <h2 id='type' style={{ fontFamily: 'var(--poppins)', color: 'var(--primary)', fontSize: '1.1rem', textAlign: 'center', transform: 'translateY(-5px)' }}>
                        {i.type ? `( ${i.type} )` : ''}
                    </h2>

                    <section id='jarak' className='swiper-kotak-jarak'>
                        <p style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                            <span style={{ color: i.color }}><i className='fas fa-map-location-dot fa-sm' /></span>
                            {i.jarak}
                        </p>
                        <p style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                            <span style={{ color: i.color }}><i className='fas fa-clock fa-sm' /></span>
                            {i.waktu}
                        </p>
                    </section>

                    <section className='swiper-kotak-rute'>
                        <h3 style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                            <span className='circle glass'><i className='fas fa-circle-info fa-sm' /></span>
                            Syarat & Ketentuan
                        </h3>
                        <ul style={{ paddingLeft: '40px', marginTop: '5px' }}>
                            <li>Minimal 3 Orang</li>
                            <li>Rute menyesuaikan paket</li>
                            <li>Sudah termasuk Guide & Dokumentasi</li>
                            <li>Jadwal Flexibel (by request)</li>
                        </ul>

                        <h3 style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                            <span className='circle glass'><i className='fas fa-location-dot fa-sm' /></span>
                            Rute yang bakal kamu lewatin :
                        </h3>
                        <ul style={{ paddingLeft: '40px', marginTop: '5px' }}>
                            {i.rute.map((r, idx) => <li key={idx}>{r}</li>)}
                        </ul>

                        {[1, 2, 3].map(num => (
                            i.wisata && i.wisata[num] && (
                                <React.Fragment key={num}>
                                    <h4 style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                                        <span className='circle glass'><i className='fas fa-location-dot fa-sm' /></span>
                                        Zona wisata ke - {num}
                                    </h4>
                                    <ul style={{ paddingLeft: '40px', marginTop: '5px' }}>
                                        {i.wisata[num].map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </React.Fragment>
                            )
                        ))}

                        {i.step && i.step.map((st, idx) => (
                            <React.Fragment key={idx}>
                                <h4 style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                                    <span className='circle glass'><i className='fas fa-location-dot fa-sm' /></span>
                                    {st.title}
                                </h4>
                                <ul style={{ paddingLeft: '40px', marginTop: '5px' }}>
                                    {st.destination.map((dest, dIdx) => <li key={dIdx}>{dest}</li>)}
                                </ul>
                            </React.Fragment>
                        ))}

                        <h4 style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', fontSize: '1rem', marginTop: '10px' }}>
                            <span className='circle glass'><i className='fas fa-box-open fa-sm' /></span>
                            Fasilitas yang kamu dapat :
                        </h4>
                        <ul style={{ paddingLeft: '40px', marginTop: '5px' }}>
                            {i.pack.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </section>
                </article>
            </section>

            <section className='abs-button' style={{ opacity: scrollY > 200 ? 1 : 0 }}>
                <div className='button' style={{ width: '50%', borderRadius: '10px', height: '50px', fontSize: '0.9rem', backgroundColor: 'unset', fontWeight: 'bold' }}>
                    {i.harga}
                </div>
                <button
                    className='button'
                    style={{ width: '50%', borderRadius: '10px', height: '50px', fontSize: '0.85rem', backgroundColor: i.color, gap: '5px' }}
                    onClick={() => order(i.title, i.type, i.color)}
                >
                    <i className='fab fa-whatsapp fa-xl' />
                    Pesan paket
                </button>
            </section>
        </main>
        </>
    );
};

export default Type;