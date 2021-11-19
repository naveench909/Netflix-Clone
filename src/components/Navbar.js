import React, {useState, useEffect} from 'react'
import './Navbar.css';
import netflixLogo from '../assets/netflix.png'
import avatar from '../assets/avatar.png'

function Navbar() {
    const [show , handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll" , () =>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src={netflixLogo} alt="Netflix Logo" />
            <img className='nav__avatar' src={avatar} alt="avatar" />
        </div>
    )
}

export default Navbar
