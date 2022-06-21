
import './App.css';

import SocialMedia from './socialMedia/SocialMedia';
import ImageAbout from './components/ImageAbout/ImageAbout';
import AboutUs from './components/aboutUs/AboutUs';
import Vision from './components/vision/Vision';
import Navbar from './components/navbar/Navbar';
import GuidingPriciple from './components/guidingpriciple/GuidingPriciple';
import Values from './components/values/Values';
import Awards from './components/awards/Awards';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <SocialMedia/>
       <Navbar/>
       <ImageAbout/>
       <AboutUs/>
       <Vision/>
       
       <GuidingPriciple/>
       <Values/>
       <Awards/>
       <Footer/>
    </div>
  );
}

export default App;
// uvw