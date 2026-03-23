import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebase";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";


function UpcomingEvents() {

    const db = getFirestore(app);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const querySnapshot = await getDocs(collection(db, "events"));
            const data = querySnapshot.docs.map(doc => doc.data());

            const sortedData = data.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });

            const limitedData = sortedData.slice(0, 3);

            setEvents(limitedData);
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <div className='section-header' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 className='section-title'>Upcoming Events</h2>
                <Link className="view-all dark"to={'/events'}>View all</Link>
            </div>

            <div className="events-grid">
                {events.map((event, index) => (
                    <div className="events-card" key={index}>
                        {event.image?.trim() && (
                        <div className="event-card-img">
                            <img src={event.image} alt={event.title} />
                        </div>
                        )}

                        <div className="event-upper-tag">
                            <div className="event-type-tag dark">
                                <span>{event.type}</span>
                            </div>
                            <div>
                                <span className="event-date">{event.date}</span>
                            </div>
                        </div>

                        <h3 className="event-title">
                            {event.title}
                        </h3>

                        <div className="event-desc">
                            <ReactMarkdown>{event.description}</ReactMarkdown>
                        </div>
                        <div className="event-location">📍 {event.location}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingEvents;