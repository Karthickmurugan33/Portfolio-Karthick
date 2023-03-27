import React from 'react'
import CTA from './CTA'
import ME from "../../assets/dp3.png"
import HeaderSocial from './HeaderSocial'
import "./header.css";
const Header = () => {
    return (
        <header>
            <div className='container header__container'>

                <h5>Hello I'm</h5>
                <h1>Karthick</h1>
                <h5 className='text-light'>
                    Frontend Developer
                </h5>
                <CTA />
                <HeaderSocial />
                <div className='me'>
                    <img className='meimg' src={ME} alt="" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>

        </header>
    )
}

export default Header