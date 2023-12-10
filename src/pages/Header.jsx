import React, { useState } from 'react'
import Cart from '../components/Cart'
import Logo from '../components/Logo';
import SliderImg from '../components/SliderImg';
import { FaFacebook, FaTwitter, FaInstagram, FaCaretSquareDown } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import ElementorSection from '../components/ElementorSection';

function Header() {
    return (
        <div>
            {/* Header Start */}
            <div className='header'>
                <header>
                    <div className='container_py'>
                        <div className='menu_cart'>
                            <Cart />
                        </div>
                        <div className='header_social_media'>
                            <a href='#'><FaFacebook /></a>
                            <a href='#'><FaTwitter /></a>
                            <a href='#'><FaInstagram /></a>
                        </div>
                    </div>
                </header>
                <div className='elementor'>
                    <div className='container'>
                        <div className='logo'>
                            <Logo />
                        </div>

                        <Navbar />
                    </div>
                </div>
                <div className='slider'>
                    <a href='#'>
                        <div className='slider_img'>
                            <SliderImg />
                            <div className='slider_txt'>
                                <div className='slider-description'>The 6th (2023) Annual DC Chocolate Festival is CONFIRMED!</div>
                                <a href='#'><button>BUY TICKETS</button></a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <ElementorSection />
        </div>
    )
}

export default Header