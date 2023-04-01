import React from 'react'
//import { FaGithubSquare,FaLinkedinIn,BsFacebook,FaInstagram,FaTwitter } from "react-icons/fa"
import "./footer.css"
function Footer() {
  return (
    <footer className='footer-container'>
        <ul>
            <h3 className='company'>Company</h3>
            <li>About</li>
            <li>contributions</li>
            <li>Terms of Service</li>
            <li>Privacy</li>
            <li>Policies</li>
        </ul>
        <ul>
            <h3 className='stay-in-touch'>Stay in touch</h3>
            <li><span></span>facebook</li>
            <li><span></span>Instagram</li>
            <li><span></span>Twitter</li>
            <li><span></span> Linkdlen</li>
            <li><span></span>GitHub</li>
            <li>Contact us</li>
        </ul>
    </footer>
  )
}

export default Footer