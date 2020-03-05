import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import WeddingCard from './WeddingCard';
import '../App.css';
import weddingEventContext from '../Contexts/WeddingEventContext';

export default function Home() {
  const { weddingEvent, setWeddingEvent } = useContext(weddingEventContext);

  // const getWeddingEvents = (res) => {
  //         setWeddingEvent(res.data)

  //   const weddingEventsGetRequest = () => {
  //     axios
  //       .get("https://weddingportfolio.herokuapp.com/auth/user/")
  //     //   .then(res => getWeddingEvents(res))
  //       .catch(err => console.log(err.response));
  //   }
  return (
    <div>
      <h1>Wedding Planner Portfolio</h1>
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
// }

// function EventDetails({event}) {
//     return (
//         <Link to={`/weddingevent/${event.id}`}>
//             <WeddingCard event={event} />
//         </Link>
//     )
// }
