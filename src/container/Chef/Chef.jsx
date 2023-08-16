import React from 'react';
import images from "../../constants/images.js";
import './Chef.css';
import SubHeading from "../../components/SubHeading/SubHeading.jsx";
function Chef(){
  return (
    <div className='app__chef section__padding'>
      <div className='app__chef-image'>
        <img src={images.chef} alt="Chef"></img>
      </div>
      <div className='app__chef-info'>
        <SubHeading text="Chef's word" />
        <h1 className="headtext__cormorant">What we believe in</h1>
        <div className='app__chef-info_quote'>
          <p className="p__opensans"><img src={images.quote} alt="Quote"></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
          <p className="p__opensans"></p>
        </div>
          <div className="app__chef-sign">
            <p>Kevin Luo</p>
            <p className="p__opensans">Chef & Founder</p>
            <img src={images.sign} alt="sign_image" />
          </div>
      </div>
    </div>
  )
}
export default Chef;
