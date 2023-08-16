import React from 'react';
import images from "../../constants/images.js"
import './Header.css';
import SubHeader from "../../components/SubHeading/SubHeading.jsx"

function Header(){
  return (
    <div className='app__header section__padding' id='home'>
      <div className='app__header-info'>
        <SubHeader text="Chase The New Flavour"/>
        <h1>The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>
      <div className='app__header-image'>
        <img src={images.welcome}></img>
      </div>
    </div>
  )
}
export default Header;
