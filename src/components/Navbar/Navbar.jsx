import React from 'react';
import './Navbar.css';
import images from "../../constants/images";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import { useState } from 'react';
function Navbar(){
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht}></img>
      </div>
      <div className='app__navbar-links'>
        <a className='p__opensans' href='#home'>Home</a>
        <a className='p__opensans' href='#about'>About</a>
        <a className='p__opensans' href='#menu'>Menu</a>
        <a className='p__opensans' href='#awards'>Awards</a>
        <a className='p__opensans' href='#contact'>Contact</a>
      </div>
      <div className='app__navbar-buttons'>
        <button type='button' className='p__opensans'>Log In / Register</button>
        <div className='app__navbar-buttons-sign' ></div>
        <button type='button' className='p__opensans'>Book Table</button>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() =>{setIsToggle(true)}}/>
        {isToggle && <div className='app__navbar-smallscreen-overlay'>
          <MdOutlineRestaurantMenu color="#fff" className='overlay__close' fontSize={27} onClick={() =>{setIsToggle(false)}}/>
          <div className='app__navbar-smallscreen-links'>
            <a className='p__opensans' href='#home'>Home</a>
            <a className='p__opensans' href='#about'>About</a>
            <a className='p__opensans' href='#menu'>Menu</a>
            <a className='p__opensans' href='#awards'>Awards</a>
            <a className='p__opensans' href='#contact'>Contact</a>
          </div>
          </div>}
      </div>
    </div>
  )
}
export default Navbar;
