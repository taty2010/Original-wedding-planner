import React, { useEffect, useContext } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import WeddingCard from "./WeddingCard";
import weddingEventContext from "../Contexts/WeddingEventContext";

export default function Home() {
    // const { weddingEvent, setWeddingEvent } = useContext(weddingEventContext);

    // const getWeddingEvents = (res) => {
    //         setWeddingEvent(res.data)

    //   const weddingEventsGetRequest = () => {
    //     axios
    //       .get("https://weddingportfolio.herokuapp.com/auth/user/")
    //     //   .then(res => getWeddingEvents(res))
    //       .catch(err => console.log(err.response));
    //   }
    return (
        <div className="home">
            <h1>Hey!!!</h1>
            {/* {weddingEvent.map( event => (
                <EventDetails key={event.id} event={event} />
            ))} */}
        </div>
    )
}
// }

function EventDetails({event}) {
    return (
        <Link to={`/weddingevent/${event.id}`}>
            <WeddingCard event={event} />
        </Link>
    )
}
