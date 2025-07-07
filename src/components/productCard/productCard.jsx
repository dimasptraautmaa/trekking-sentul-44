import React from 'react';
import axios from 'axios';
import Swaload from '../../../utils/swaload';
import "./productCard.css";

const ProductCard = () => {

    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([]);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://fakestoreapi.com/products', { withCredentials: false });
            setData(response.data);
        } catch (error) {
            return false;
        } finally {
            setLoading(false);
        }
    }

    const sliceText = (text) => {
        const words = text.split(' ');
        return words.slice(0, 2).join(" ");
    }

    React.useEffect(() => { getData() }, [])

    return (
        <div className='product-page'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px'}}>
                <h1 style={{fontFamily: 'sans-serif', fontSize: '1.1rem', color: 'var(--text)'}}>Hot <span>Products</span></h1>
                <h3 style={{fontSize: '0.85rem', color: 'var(--text)', cursor: 'pointer'}}>View all</h3>
            </div>
            <div className='product-container'>
                <div className="product-wrapper">
                    {(loading) ? <Swaload.product/> :
                    <>
                        {(data) && data.slice(0, 10).map((data, key) => {
                            return (
                                <div className='product-card' key={key}>
                                    <div className='product-img-container'>
                                        <img src={data.image} alt="React Web Template" className='product-img' />
                                    </div>
                                    <div className='product-text-container'>
                                        <h1 style={{fontSize: '0.9rem', fontFamily: 'sans-serif', color: 'white'}}>{sliceText(data.title)}</h1>
                                        <h3 style={{fontSize: '0.7rem', color: 'gray'}}>By Dimas Putra</h3>
                                    </div>
                                    <div className='product-more-container'>
                                        <div>
                                            <h3 style={{fontSize: '0.7rem', color: 'var(--text)'}}>Price</h3>
                                            <h3 style={{fontSize: '0.8rem', color: 'var(--text)', marginTop: '1px'}}><span>Rp 5.000.000</span></h3>
                                        </div>
                                        <div className='button' style={{width: '65px', height: '25px', fontSize: '0.7rem'}}>Detail</div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                    }
                </div>
            </div>
            <div className='product-container'>
                <div className="product-wrapper">
                    {(loading) ? <Swaload.product/> : 
                    <>
                        {(data) && data.slice(10, 20).map((data, key) => {
                            return (
                                <div className='product-card' key={key}>
                                    <div className='product-img-container'>
                                        <img src={data.image} alt="React Web Template" className='product-img' />
                                    </div>
                                    <div className='product-text-container'>
                                        <h1 style={{fontSize: '0.9rem', fontFamily: 'sans-serif', color: 'white'}}>{sliceText(data.title)}</h1>
                                        <h3 style={{fontSize: '0.7rem', color: 'gray'}}>By Dimas Putra</h3>
                                    </div>
                                    <div className='product-more-container'>
                                        <div>
                                            <h3 style={{fontSize: '0.7rem', color: 'var(--text)'}}>Price</h3>
                                            <h3 style={{fontSize: '0.8rem', color: 'var(--text)', marginTop: '1px'}}><span>Rp 5.000.000</span></h3>
                                        </div>
                                        <div className='button' style={{width: '65px', height: '25px', fontSize: '0.7rem'}}>Detail</div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCard;