import React from 'react';
import images from "../../constants/images.js"
import './AboutUs.css';

function AboutUs(){
  return (
    <div className="app__aboutUs section__padding" id='about'>
      <div className='app__aboutUs-image'>
        <img src={images.G} alt="GImage"></img>
      </div>
      <div className='app__aboutUs-info'>
        <div className='app__aboutUs-info_first'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="Spoon"></img>
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
        <div className='app__aboutUs-info_knife'>
          <img src={images.knife} alt="Knife"></img>
        </div>
        <div className='app__aboutUs-info_last'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="Spoon"></img>
          <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}
export default AboutUs;
