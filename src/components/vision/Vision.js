import React from 'react'
import './vision.css'
import $ from 'jquery'
export default function Vision() {


    $(window).scroll(function(){
        var positionTop = $(document).scrollTop();
        console.log(positionTop);
        
         if((positionTop> 1400 && positionTop<1800)){
            $('.vision-container').addClass('animated animate__flipInX')
          
            
        }
       
      
      })
    
    return (

        <section style={{
            background: "url(https://www.shreecement.com/uploads/about-us-page/vision-bg.jpg)"
        }}>
            <div>
                <div>

                </div>
            </div>
            <div className='container vision-container'>
                <div className='row' style={{ color: "white" }}>
                    <div className='offset-xl-2 offset-lg-2 offset-m-0 offset-xs-0 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 text-centre center-title-white'>

                        <h2>Our Vision</h2>
                        <h4>Lead in creating prosperity and happiness for all stakeholders through innovation and sustainable practices.</h4>
                        <p>As an organisation, we spread happiness amongst everyone connected with our ecosystem and create wealth for investors, employees. business associates and communities where we operate by experimenting and implementing new ideas for improving efficiencies and maximising the ratio of output product to input resources.</p>
                    </div>
                </div>

            </div>
        </section>



    )
}
