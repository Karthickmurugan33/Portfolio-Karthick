import React from 'react'
import "./about.css";
import ME from "../../assets/DP1.jpg"
import { BsAwardFill } from "react-icons/bs"
import { BsFolderCheck } from "react-icons/bs"


const about = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="MY IMAGE" /></div>
                </div>
                <div className='about__content'>

                    <div className='about__cards'>
                        <article className='about__card'>
                            <BsAwardFill className='about__icon' />
                            <h5>Experience</h5>
                            <small>8 Months Internship </small>
                        </article>

                        <article className='about__card'>
                            <BsFolderCheck className='about__icon' />
                            <h5>Projects</h5>
                            <small>15+ Completed  </small>
                        </article>
                    </div>
                    <p>I am excited to announce that I am actively seeking a new career opportunity as a Frontend Developer.
                        As a former Lab Technician, I have gained valuable experience in conducting experiments, analyzing
                        data, and collaborating with a team to achieve goals. However, my passion for technology
                        and programming has led me to pursue a career in frontend development.</p>

                    <a href="#contact" className='btn btn-primary'> Let's Talk </a>
                </div>

            </div>
        </section>
    )
}

export default about