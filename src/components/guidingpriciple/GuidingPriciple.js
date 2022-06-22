import React from 'react'
import './guidingpriciple.css'
import $ from 'jquery'
export default function GuidingPriciple() {
  $(window).scroll(function(){
    var positionTop = $(document).scrollTop();
    console.log(positionTop);
    
     if((positionTop> 1600 && positionTop<1900)){
        $('.guiding-principle-items').addClass('animate__bounceIn animated')
        // $('guiding-principle-heading-container').addClass('animate__bounceIn animated')
        
     
    }
  
  })
  return (
     
    <div>
        <div className='guiding-principle-heading-container'>
            <h2>Our Guiding Principles</h2>
        </div>
        <div className='guiding-principle-items'>
            
                <div className='priciple'> <span>Enforce good corporate goverance practices</span></div>
                <div className='priciple'> <span>Encourage integrity ofconduct</span></div>
                <div className='priciple'> <span>Ensureclarity in communication</span></div>
                <div className='priciple'> <span>Remain accountable toall stakeholders</span></div>
                <div className='priciple'> <span>Encourage socially responsible behaviour</span></div>
           
        </div>
    </div>
  )
}
