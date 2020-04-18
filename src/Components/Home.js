import React, { useContext } from 'react';
import WeddingCard from './WeddingCard';
import weddingEventContext from '../Contexts/WeddingEventContext';

export default function Home() {
  const { weddingEvent, setWeddingEvent } = useContext(weddingEventContext);

  return (
    <div>
      <header/>
      <div className='desc'>
        <h2>Show Off Your Work!</h2>
        <h3>The Wedding Planner Portfolio gives you the tools you need to show off all your hard work and gain new clients.</h3>
      </div>
      <div className='offer-wrapper'>
      <div className='services'>
        <h2>Services</h2>
        <ul>
          <li><i class="fas fa-camera-retro"></i>Photography</li>
          <li><i class="fas fa-archway"></i>Venue</li>
          <li><i class="fas fa-brush"></i>Design</li>
        </ul>
      </div>
        <div className='box left'/>
        <div className='box right'/>
      </div>
      <div>
        <h2>Need a Planner?</h2>
        <h3>Check out these posts From some of our amzing planners.</h3>
      </div>
      <div className='home'>
        {weddingEvent.map(event => (
          <WeddingCard
            key={event.id}
            image={event.image}
            description={event.description}
            location={event.location}
            theme={event.theme}
            vendors={event.vendors}
          />
        ))}
      </div>
    </div>
  );
}
