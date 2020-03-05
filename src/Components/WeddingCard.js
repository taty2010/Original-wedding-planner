import React from 'react';
import '../App.css';

const WeddingCard = props => {
  return (
    <div className='card-container'>
      <div className='wedding-card'>
        <div className='wedding-card-front'>
          <img src={props.image} alt='wedding-img' />
          <div className='description'>
            <p>{props.description}</p>
          </div>
        </div>
        <div className='wedding-card-back'>
          <p>Wedding Location: {props.location}</p>
          <p>Wedding Theme: {props.theme}</p>
          <p>Wedding Vendors: {props.vendors}</p>
        </div>
        {/* {props.vendors.map(vendor => (
        <div key={vendor} className="vendors">
          {vendor} */}
      </div>
    </div>
  );
};

export default WeddingCard;
