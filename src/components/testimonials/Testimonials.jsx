import React from 'react'
import "./testimonial.css"
import IMG from "../../assets/back2.jpg"

const Testimonials = () => {
    const data = [{
        img: "https://i.pinimg.com/originals/ca/72/af/ca72af3ba73e5d06cd4c47842b8ab98a.jpg",
        projectName: "Thali Booking Website",
        git: "https://github.com/Karthickmurugan33/Thali-booking-app",
        live: "https://tqiq39.csb.app/"
    },
    {
        img: "https://thumbs.dreamstime.com/b/movie-ticket-booking-app-movie-ticket-booking-app-popcorn-movie-theater-tickets-smartphone-146082701.jpg",
        projectName: "Movie Ticket Booking",
        git: "https://github.com/Karthickmurugan33/Movie-ticket-booking",
        live: "https://gkpkel.csb.app/"
    },
    {
        img: "https://th.bing.com/th/id/OIP.smQbG62gVOSG8djiTBrNcQHaE8?pid=ImgDet&rs=1",
        projectName: "Sports Live Score Website",
        git: "https://github.com/Karthickmurugan33/Sports-Live-Score-Page-Project",
        live: "https://rkikne.csb.app/"
    },
    {
        img: "https://th.bing.com/th/id/OIP.JJiCDRjU00vsGC0eLKaAHgHaHa?pid=ImgDet&rs=1",
        projectName: "ChatMate",
        git: "https://github.com/Karthickmurugan33/ChatMate",
        live: "https://wu3g80.csb.app/login"
    },
    {
        img: "https://th.bing.com/th/id/OIP.Fys0g6KoqpITPK8xv_NdywHaHa?pid=ImgDet&rs=1",
        projectName: "Tip Calculator",
        git: "https://github.com/Karthickmurugan33/React-Tip-calculator-",
        live: "https://670xuc.csb.app/"
    },
    {
        img: "https://blog.otoro.net/assets/20160325/color_tanh_1b.jpeg",
        projectName: "Colorify",
        git: "https://github.com/Karthickmurugan33/Colorify",
        live: "https://97rzch.csb.app/"
    },



    ]
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {data.map((data) => (
                    <article className='portfolio__item'>
                        <div className='portfolio__item-image'>
                            <img src={data.img} alt="" />
                        </div>
                        <h3>{data.projectName}</h3>
                        <div className='portfolio__item-cta'>
                            <a href={data.git} className='btn' target='_blank'>Github</a>
                            <a href={data.live} className='btn btn-primary' target="_blank">Live Demo</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Testimonials