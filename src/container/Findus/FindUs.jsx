import React from 'react';
import SubHeading from "../../components/SubHeading/SubHeading.jsx";
import images from "../../constants/images.js"
function FindUs(){
  return (
    <div className='app__findUs app__wrapper app__bg section__padding' id='contact'>
      <div className='app__findUs-content'>
        <SubHeading text="Contact"/>
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.findus} alt="FindUsImage" />
      </div>
    </div>
  )
}
export default FindUs;
