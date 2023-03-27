import React from 'react'
import "./nav.css"
import { FaHome } from "react-icons/fa"
import { AiOutlineUser } from "react-icons/ai"
import { MdAssignment } from "react-icons/md"
import { IoMdContact } from "react-icons/io"
import { useState } from 'react'

const Nav = () => {
    const [active, setActive] = useState("#")
    return (
        <nav>
            <a href="#" onClick={() => setActive("#")} className={active === "#" ? "active" : ""}> <FaHome /></a>
            <a href="#about" onClick={() => setActive("#about")} className={active === "#about" ? "active" : ""}> <AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActive("#experience")} className={active === "#experience" ? "active" : ""}> <MdAssignment /></a>
            <a href="#contact" onClick={() => setActive("#contact")} className={active === "#contact" ? "active" : ""}> <IoMdContact /></a>
        </nav>
    )
}

export default Nav