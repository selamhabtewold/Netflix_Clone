import React, { useState, useEffect } from 'react';
import './Nav.css';
import {useNavigate} from "react-router-dom";


function Nav () {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavbar =()=>{
        if(window.scrollY >100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect (()=>{
        window.addEventListener('scroll', transitionNavbar);

        return ()=> window.removeEventListener('scroll', transitionNavbar)
    }, [])
    return (
        <div className = {`nav ${show && 'nav_black'}`}>
            <div className='nav_contents'>
                <img  
                    onClick={()=>navigate("/")}
                    className='nav_logo'
                    src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'
                    alt=''
                />
            
                <img 
                    onClick={()=>navigate("/profile")}
                    className='nav_avatar'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePqvjrMR2bJt1B2e6bNQ6RS2n0q9ZN4e1UA&s' 
                    alt=''
                />
            </div>



            

        
       


        </div>
    )
}

export default Nav; 