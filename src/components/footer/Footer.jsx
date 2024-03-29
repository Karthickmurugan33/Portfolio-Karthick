import React from 'react'
import "./footer.css";
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Karthi</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href="https://www.instagram.com/karthick_45_/"><AiFillInstagram className='insta' /></a>
            </div>
        </footer>
    )
}

export default Footer