import React from 'react';

const WeddingCard = props => {
  return (
    <div className="wedding-card">
      <img src={props.image} alt= "wedding-img" />
      <div className="description">
        <p>Description: {props.description}</p>
      </div>
      <p>Wedding Location: {props.location}</p>
      <p>Wedding Theme: {props.theme}</p>
      <p>Wedding Vendors:</p>

      {props.vendors.map(vendor => (
        <div key={vendor} className="vendors">
          {vendor}
        </div>
      ))}
    </div>
  );
};

export default WeddingCard;