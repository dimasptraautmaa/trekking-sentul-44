import React from 'react'
import "./heroSlider.css"

const HeroSlider = () => {

    const initSlider = (type) => {
        const slider = document.querySelector('.slider');
        const list = document.querySelector('.list');
        const thumbnail = document.querySelector('.thumbnail');
        const sliderItems = list.querySelectorAll('.item')
        const thumbnailItems = thumbnail.querySelectorAll('.item')

        if (type == "next") {
            list.appendChild(sliderItems[0]);
            thumbnail.appendChild(thumbnailItems[0]);
            slider.classList.add('next')
        } else {
            const lastItemPosition = sliderItems.length - 1;
            list.prepend(sliderItems[lastItemPosition]);
            thumbnail.prepend(thumbnailItems[lastItemPosition]);
            slider.classList.add('prev')
        }

        setTimeout(() => {
            slider.classList.remove('prev');
            slider.classList.remove('next');
        }, 1500)
    }

    return (
        <div className='slider-container'>
            {/* <div className='linearbg'></div> */}
            <div className='slider'>
                <div className='list'>
                    <div className='item'>
                        <img src="/img/alam1.jpg" alt="" />
                        <div className='detail'>
                            <div className='title'>Pantai Indah</div>
                            <div className='desc'>lorem ipsum dolor sit amet. lorem ipusm</div>
                        </div>
                    </div>
                    <div className='item'>
                        <img src="/img/alam2.jpg" alt="" />
                        <div className='detail'>
                            <div className='title'>Curug Mekar</div>
                            <div className='desc'>lorem ipsum dolor sit amet. lorem ipusm</div>
                        </div>
                    </div>
                    <div className='item'>
                        <img src="/img/alam3.jpg" alt="" />
                        <div className='detail'>
                            <div className='title'>Curug Mekar</div>
                            <div className='desc'>lorem ipsum dolor sit amet. lorem ipusm</div>
                        </div>
                    </div>
                    <div className='item'>
                        <img src="/img/alam4.jpg" alt="" />
                        <div className='detail'>
                            <div className='title'>Curug Mekar</div>
                            <div className='desc'>lorem ipsum dolor sit amet. lorem ipusm</div>
                        </div>
                    </div>
                </div>
                <div className="thumbnail">
                    <div className='item'>
                        <img src="/img/alam1.jpg" alt="" />
                    </div>
                    <div className='item'>
                        <img src="/img/alam2.jpg" alt="" />
                    </div>
                    <div className='item'>
                        <img src="/img/alam3.jpg" alt="" />
                    </div>
                    <div className='item'>
                        <img src="/img/alam4.jpg" alt="" />
                    </div>
                </div>
                <div className='arrow'>
                    <div id='prev'  onClick={() => initSlider('prev')} className='fa-solid fa-arrow-left fa-lg'></div>
                    <div id='next'  onClick={() => initSlider('next')} className='fa-solid fa-arrow-right fa-lg'></div>
                </div>
                <div className="loading-bar">

                </div>
            </div>
        </div>
    )
}

export default HeroSlider