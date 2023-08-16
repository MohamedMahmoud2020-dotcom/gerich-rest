import React from 'react';

import './MenuItem.css';

function MenuItem(props){
  return (
    <div className='app__menuItem'>
      <div className='app__menuItem-heading'>
      <div className='app__menuItem-left'>
        <p className="p__cormorant" style={{color:'#DCCA87'}}>{props.title}</p>
      </div>
      <div className='app__menuItem-right'>
        <div className='app__menuItem-right_sign'></div>
        <p className="p__cormorant">{props.price}</p>
      </div>
    </div>
    <p className="p__opensans"  style={{ color: '#AAAAAA' }}>{props.tags}</p>
    </div>
  )
}
export default MenuItem;

