"use client";  

import React, { useState, useEffect } from 'react';
import './MainSlider.css';
 
const images = [
    "/bayvora_hero1_desktop.png", 
];

function MainSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); 

        return () => clearInterval(sliderInterval);
    }, []); 

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="sliderContainerMainSliderHomePage">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`slideMainSliderHomePage ${index === currentIndex ? 'activeSlideMainSliderHomePage' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
            ))}
             
            {/* <div className="dotsWrapperMainSliderHomePage">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`dotMainSliderHomePage ${index === currentIndex ? 'activeDotMainSliderHomePage' : ''}`}
                    ></div>
                ))}
            </div> */}
        </div>
    );
}

export default MainSlider;