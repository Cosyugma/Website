import React from 'react'
import './imageabout.css'
import $ from 'jquery'
export default function ImageAbout() {

  $(window).scroll(function(){
    var positionTop = $(document).scrollTop();
    console.log(positionTop);
    
     if((positionTop> 50 && positionTop<200) ){
       
        $('.imageabout-items').addClass('animated  animate__backInUp')
     
    }
  
  })

  return (
    <div className='container-image'>
    <div className='imageabout-container '>
      <div className='imageabout-items fadeInUpshort '>
        <h2>We are COSYUGMA</h2>
        <span>One of India's most sustainable and fastest growing companies that embraces varied perspectives, bias to action and continuous innovation to create happiness for all its stakeholders</span>
      </div>
    </div>
    </div>


    
      // <div className='inner-banner animatedParent jarallax imagebox-container'>
      //   <div className='image-about' id='jarallax-container-0'>
      //     <div className='image-container'></div>
      //   </div>
      //   <div className='inner-banner-caption animated fadeInIpShort go d-flex flex-wrap align-content-center image-items'>
      //     <h1>We are COSYUGMA</h1>
      //     <p>One of India's most sustainable and fastest growing companies that embraces varied perspectives, bias to action and continuous innovation to create happiness for all its stakeholders</p>
      //   </div>
      // </div>
   
  )
}
