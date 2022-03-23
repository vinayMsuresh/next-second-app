import React,{useState} from "react";
import { useRouter } from "next/router";
function EventLists({eventLists}){
    const [events, setEvents] = useState(eventLists);
    const router = useRouter();

    const sportsEvents = async() => {
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json();
        setEvents(data);
        router.push('/events?category=sports',undefined,{shallow:true});
    } 

    return(
        <>
            <h2>Event Lists</h2>
            <button onClick={sportsEvents} >Click here for Only Sports Events</button>
            {
                events.map(event=>
                    <div key={event.id}>
                        <h2>{event.id} {event.title} {event.category}</h2>
                        <p>{event.description}</p>
                    </div>
                    )
            }
        </>
    )
}

export default EventLists;

export async function getServerSideProps(context) {
    const {query} = context;
    const {category} = query;
    const queryString = category ? `category=${category}` : '';
    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await response.json();

    return{
        props:{
            eventLists: data,
        }
    }
}