import React from "react";
import "./styles.css"; // Create this for event styling

const eventsData = [
    {
        id: 1,
        title: "Freedom Fest",
        description: "Dive into the world of Open Knowledge and All",
        image: "https://www.swechaap.org/wp-content/uploads/2025/03/FF2025-Poster-1024x724.png",
      },
      {
        id: 2,
        title: "Sigma 2K25",
        description: "The Tech Fest of CSD and CSIT Srkrec",
        image: "https://srkrec.edu.in/sigma/img/about.png",
      },
      {
        id: 3,
        title: "Web-Tech Hackathon 2025",
        description: "18-Hours WebTech Hackathon conducted by SDC members.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyK05_YhjN87mLDVccdg9zNpR58SeWDd-X0w&s",
      }
    ];

const Events = () => {
  return (
    <section className="events-section">
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {eventsData.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
