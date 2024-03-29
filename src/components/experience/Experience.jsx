import React from 'react'
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs"

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>

                            <BsFillCheckCircleFill className='experience__icon' />
                            <h4>HTML</h4>
                        </article>
                        <article className='experience__details'>

                            <BsFillCheckCircleFill className='experience__icon' />
                            <h4>CSS</h4>
                        </article>
                        <article className='experience__details'>

                            <BsFillCheckCircleFill className='experience__icon' />
                            <h4>JavaScript</h4>
                        </article>
                        <article className='experience__details'>

                            <BsFillCheckCircleFill className='experience__icon' />
                            <h4>React</h4>
                        </article>
                        <article className='experience__details'>

                            <BsFillCheckCircleFill className='experience__icon' />
                            <h4>Boosttrap</h4>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience