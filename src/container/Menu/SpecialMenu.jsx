import React from 'react';
import images from "../../constants/images";
import data from "../../constants/data.js";
import './SpecialMenu.css';
import MenuItem from '../../components/Menuitem/MenuItem';
function SpecialMenu(){
  return (
    <div className='app__specialMenu section__padding' id='menu'>
      <div className='app__specialMenu-heading'>
        <p className='p__cormorant'>Menu That Fits Your Palatte</p>
        <img src={images.spoon} alt="Spoon"></img>
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>
      <div className='app__specialMenu-container'>
        <div className='app__specialMenu-container_left'>
          <p className="app__specialMenu-menu_heading">Jucies</p>
          <div className="app__specialMenu_menu_jucies">
          {data.jucies.map((jucie, index) => (
            <MenuItem key={index}  title={jucie.title} price={jucie.price} tags={jucie.tags} />
          ))}
          </div>
        </div>
        <div className='app__specialMenu-container_center'>
          <img src={images.menu} alt="Menu"></img>
        </div>
        <div className='app__specialMenu-container_right'>
            <p className="app__specialMenu-menu_heading">Cocktails</p>
            <div className='app__specialMenu_menu_cocktails'>
              {data.cocktails.map((cocktail, index) => (
                <MenuItem key={index}  title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              ))}
            </div>
        </div>
      </div>
      <div className='app__specialMenu-button'>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
}
export default SpecialMenu;
