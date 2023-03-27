import React from 'react'
import "./contact.css";
import { MdEmail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zkicy9m', 'template_c12ba6w', form.current, '9uonu-gZTMn7KYP94')
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>karrthick33@gmail.com</h5>
                        <a href="mailto:karrthick33@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <IoLogoWhatsapp className='contact_option-icon' />
                        <h4>What's Up</h4>
                        {/* <h5></h5> */}
                        <a href="https://api.whatsapp.com/send?phone=919994835716" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button className='btn btn-primary' type='submit'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact