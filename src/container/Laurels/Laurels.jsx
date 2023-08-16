import React from 'react';
import SubHeading from "../../components/SubHeading/SubHeading.jsx";
import {images, data} from "../../constants"
import './Laurels.css';


function AwardCard(props){
  return (
    <div className='app__laurels_award-card'>
      <img src={props.imgUrl}></img>
      <div className='app__laurels_award-card_info'>
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{props.title}</p>
        <p className="p__opensans">{props.subtitle}</p>
      </div>
    </div>
  )
}

function Laurels(){


  return (
    <div className='app__laurels section__padding' id='awards'>
      <div className='app__laurels-left'>
        <div className='app__laurels-left_heading'>
          <SubHeading text="Awards & recognition"/>
          <h1 className="headtext__cormorant">Our Laurels</h1>
        </div>
        <div className='app__laurels-left_info'>
          {data.awards.map((award, index) => (
            <AwardCard imgUrl={award.imgUrl} title={award.title} subtitle={award.subtitle} key={index}/>
          ))}
        </div>
      </div>
      <div className='app__laurels-right'>
        <img src={images.laurels}></img>
      </div>
    </div>
  )
}
export default Laurels;
