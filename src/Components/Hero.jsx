import React from 'react'
import './Hero.css'
import arrow_icon from './Assets/arrow.png'
import hero_image from './Assets/hero_image.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>New Arrivals Only</h1>
                    <h3>New</h3>
                        <h3>Collections</h3>
                        <h3>for Everyone</h3>
                    

                <div className="hero_latest_btn">
                    <p>Latest Collections<img src={arrow_icon} alt="" /></p>
                    

                </div>

            </div>

            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>

        </div>

    )
}

export default Hero
