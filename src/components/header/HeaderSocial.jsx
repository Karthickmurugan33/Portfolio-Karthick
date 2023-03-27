import React from 'react'
import { IoLogoLinkedin } from "react-icons/io"
import { BsGithub } from "react-icons/bs"

const HeaderSocial = () => {
    return (
        <div className='header-social'>
            <a href="https://www.linkedin.com/in/karthick-m-60499b227" target="_blank"><IoLogoLinkedin /></a>
            <a href="https://github.com/Karthickmurugan33" target="_blank"><BsGithub />  </a>


        </div>
    )
}

export default HeaderSocial