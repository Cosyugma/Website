import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='containe'>
      
    <div className='footer-container'>
        <div className='footer-x' >
            <div className='footer-items'>
                <div>
                    <a href='#' className='footer-links'><h3 >About Us</h3></a>
                    <ul>
                        <li><a href='#' className='footer-links'>About Shree Cement</a></li>
                        <li><a href='#' className='footer-links'>The Shree Philosophy</a></li>
                        <li><a href='#' className='footer-links'>Board Of Directors</a></li>
                        <li><a href='#' className='footer-links'>Awards</a></li>
                        <li><a href='#' className='footer-links'></a></li>
                    </ul>
                </div>
                <div>
                <a href='#' className='footer-links'><h3>Our Business</h3></a>
                    <ul>
                        <li><a href='#' className='footer-links'>Products</a></li>
                        <li><a href='#' className='footer-links'>Plant Locations</a></li>
                        <li><a href='#' className='footer-links'>Home Builder's Guide</a></li>
                        <li><a href='#' className='footer-links'>Business With Us</a></li>
                        
                    </ul>
                </div>
            </div>
            <div className='footer-items'>
            <a href='#' className='footer-links'><h3 >Sustainability</h3></a>
                    <ul>
                        <li><a href='#' className='footer-links'>Community</a></li>
                        <li><a href='#' className='footer-links'>Circular Economy</a></li>
                        <li><a href='#' className='footer-links'>Stakeholder Guides</a></li>
                        <li><a href='#' className='footer-links'>Sustainability Reports</a></li>
                        
                    </ul>
            </div>
            <div className='footer-items'>
                <ul>
                    <li><a href='#' className='footer-links'>Innovation</a></li>
                    <li><a href='#' className='footer-links'>Investors</a></li>
                    <li><a href='#' className='footer-links'>Newsroom</a></li>
                    <li><a href='#' className='footer-links'>Careers</a></li>
                    <li><a href='#' className='footer-links'>Contact Us</a></li>
</ul>
            </div>
            <div className='footer-items'>
            <ul>
                    <li><a href='#' className='footer-links'>Privacy Policy</a></li>
                    <li><a href='#'  className='footer-links'>Terms Of Use</a></li>
                    <li><a href='#' className='footer-links'>Equal Opportunity</a></li>
                    <li><a href='#' className='footer-links'>Legal Disclaimer</a></li>
                    <li><a href='#' className='footer-links'>Sitemap</a></li>
                </ul>
            </div>
        </div>
        <div>
            <div className='footer-follow-link'>
                <h2 style={{color:"white"}}>Follow us on</h2>
                <div className='follow-link-icons'>
                    <ul>
                    <li className='footer-link-item'><a href="collapsible.html"> <i className='fa fa-twitter' style={{color:"white"}}></i></a></li>
                    <li className='footer-link-item'><a href="collapsible.html"> <i class="fa-brands fa-instagram" style={{color:"white"}}></i></a></li>
                    <li className='footer-link-item'><a href="collapsible.html"> <i class="fa-brands fa-facebook" style={{color:"white"}}></i></a></li>
                    <li className='footer-link-item'><a href="collapsible.html"> <i class="fa-brands fa-linkedin-in" style={{color:"white"}}></i></a></li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                <input placeholder='Enter Email id to subscribe'/>
                <input className="favorite styled" type="button" value="Submit"/>
                </div>

            </div>

            
        </div>
    </div>
    
    </div>    
  )
}
