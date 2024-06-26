import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//components
import Singleevent from '../Singleevent';
import logo from './logo.png';
import playcircle from './playbtn-circle.png'
import playtriangle from './playbtn.png' 
import homepic2 from './homepic2.jpeg';
import Newsletter from '../Newsletter';

const Home = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('/api/events');
            const json = await response.json();

            if (response.ok) {
                setEvents(json);
            }
        };
        fetchEvents();
    }, []);

    const displayedEvents = events.slice(0, 3);

    return (
        <div className="home">
            <div className="bglogo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="main">
                <img src={homepic2} alt="Home" className='main-img'/>
                <h1>Lorem Ipsum Dolor sit Amet</h1>
                <div className='icondiv' >
                    <img src={playcircle} className='circle-icon'></img>
                    <div className='triangle-div'><img src={playtriangle}className='triangle-icon'></img>
                    </div>
                </div>
                <div className="herovid-see-more-container">
                    <Link to="/event" className="herovid-see-more-btn">SEE MORE</Link>
                </div>
                
                
            </div>
            <div className="events-container">
                <h1>Upcoming Events</h1>
                <div className="events-list">
                    {displayedEvents.map((event, index) => (
                        <div 
                            key={event._id} 
                            className={`event-item ${index === 1 ? 'middle-event' : 'corner-event'}`}
                        >
                            <img src={event.img} alt={event.title} className="event-image" />
                            <div className="event-details">
                                <h3>{event.title}</h3>
                                <p className="event-date">{event.date}</p>
                                <div className="event-buttons">
                                    <button className="buy-now-btn">GET TICKETS</button>
                                    <Link to={`/event/${event._id}`} className="read-more-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="see-more-container">
                    <Link to="/event" className="see-more-btn">SEE MORE</Link>
                </div>
            </div>
            <Newsletter />
        </div>
    );
}

export default Home;
