import React from 'react';
import images from "../../constants/images.js";
const SubHeading = (props) => (
  <div>
    <p className='p__cormorant'>{props.text}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img'></img>
  </div>
);

export default SubHeading;
