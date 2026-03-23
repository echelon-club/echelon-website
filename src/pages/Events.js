import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebase";
import ReactMarkdown from "react-markdown";

function Events() {
  const db = getFirestore(app);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const data = querySnapshot.docs.map(doc => doc.data());
      const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
      const limitedData = sortedData.slice(0, 3);
      setEvents(limitedData);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <div className='navibar'>
        <Navbar />
      </div>
      <div id="page-events" className="page">
        <div className="page-hero">
          <h1>Events</h1>
          <p>From intense hackathons to focused workshops — every event is built to push you further.</p>
        </div>
        <div className="events-section">
          <div className="events-grid">
            {events.map((event, index) => (
              <div className="events-card light" key={index}>
                {event.image?.trim() && (
                  <div className="event-card-img">
                    <img src={event.image} alt={event.title} />
                  </div>
                )}
                <div className="event-upper-tag">
                  <div className="event-type-tag light">
                    <span>{event.type}</span>
                  </div>
                  <div>
                    <span className="event-date">{event.date}</span>
                  </div>
                </div>
                <h3 className="event-title light">
                  {event.title}
                </h3>
                <div className="event-desc light">
                  <ReactMarkdown>{event.description}</ReactMarkdown>
                </div>
                <div className="event-card-bottom">
                  <div className="event-location light">
                    📍 {event.location}
                  </div>
                  <a
                    href={event.rsvp_url || "https://forms.google.com"}
                    target="_blank"
                    rel="noreferrer"
                    className="rsvp-btn"
                  >
                    RSVP
                  </a>
                </div>
              </div>
            ))}
          </div>
          </div>
        <Footer />
      </div>
    </div>
  );
}

export default Events;