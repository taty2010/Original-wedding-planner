import React, { useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import WeddingCard from "./WeddingCard";
import weddingEventContext from "../Contexts/WeddingEventContext";

const Home = () => {
    const { weddingEvent, setWeddingEvent } = useContext(weddingEventContext);

    useEffect(() => {
        getWeddingEvents = (res) => {
            setWeddingEvent(res.data)
        }

    }, [])


      const weddingEventsGetRequest = () => {
        axios
          .get("WEDDING EVENTS API")
          .then(res => this.getWeddingEvents(res))
          .catch(err => console.log(err.response));
      }
    return (
        <div className="home">
            {weddingEvent.map( event => (
                <EventDetails key={event.id} event={event} />
            ))}
        </div>
    )
}

export default Home;

function EventDetails({event}) {
    return (
        <Link to={`/weddingevent/${event.id}`}>
            <WeddingCard event={event} />
        </Link>
    )
}