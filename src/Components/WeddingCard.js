import React from 'react';

const WeddingCard = ({event}) => {

  return (
    <div className="wedding-card">
      hello
      <img src={event.image} alt= "wedding-img" />
      <div className="description">
        <p>Description: {event.description}</p>
      </div>
      <p>Wedding Location: {event.location}</p>
      <p>Wedding Theme: {event.theme}</p>
      <p>Wedding Vendors: {event.vendors}</p>

      {/* {event.vendors.map(vendor => (
        <div key={vendor} className="vendors">
          {vendor}
        </div>
      ))} */}
    </div>
  );
};

export default WeddingCard;