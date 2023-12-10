import React from 'react';
import footerLogo from './products-images/logo.jpg';
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <div className='footer'>
                <footer>
                    <div className='footer_bg_image'>
                        <div className='menu_item'>
                            <div className='footer_menu'>
                                <ul>
                                    <li><a href='#'>Shop All</a></li>
                                    <li><a href='#'>Cart</a></li>
                                    <li><a href='#'>About</a></li>
                                    <li><a href='#'>Privacy Policy</a></li>
                                    <li><a href='#'>Contact</a></li>
                                </ul>
                            </div>
                            <div className='footer_elementor'>
                                <div className='footer_seacrh'>
                                    <div className='search-icon'>
                                        <FaSearch />
                                    </div>
                                    <div className='search_footer_input'>
                                        <input type='text' placeholder='What products are you looking for?'></input>
                                    </div>
                                </div>
                                <div className='footer_logo'>
                                    <img src={footerLogo} ></img>
                                </div>
                            </div>
                            <div className='content'>
                                <p>1904 18th St NW Washington, DC 20009</p>
                                <p>(202) 903-0346</p>
                                <p><a href='#'>hello@thechocolatehousedc.com</a></p>

                                <div className='header_social_media'>
                                    <a href='#'><FaFacebook /></a>
                                    <a href='#'><FaTwitter /></a>
                                    <a href='#'><FaInstagram /></a>
                                </div>
                            </div>
                            <div className='store_hours'>
                                <div className='store_hours_tittle'>
                                    <span><b>Store Hours:</b></span>

                                    <div className='hours'>
                                        <div className='days'>
                                            <p>Monday</p>
                                            <p>Tuesday</p>
                                            <p>Wednesday</p>
                                            <p>Thursday</p>
                                            <p>Friday</p>
                                            <p>Saturday</p>
                                            <p>Sunday</p>
                                        </div>
                                        <div className='hour'>
                                            <p>12:00-18:00</p>
                                            <p>12:00-18:00</p>
                                            <p>12:00-18:00</p>
                                            <p>12:00-18:00</p>
                                            <p>12:00-18:00</p>
                                            <p>12:00-18:00</p>
                                            <p>12:00-18:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='hr'>

                        </hr>
                        <p style={{ textAlign: "center", color: "#FFFFFF", padding: "60px 0px" }}>© 2021 Chocolate House D.C. • All Rights Reserved</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer