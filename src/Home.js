import React from "react";
import Events from "./Events";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
import slide1 from "./img/slide1.png";
import slide2 from "./img/slide2.png";
import About from "./About";
import { useNavigate } from "react-router-dom"; 

function Home() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="hero-section">
      <Carousel 
  autoPlay 
  infiniteLoop 
  showThumbs={false} 
  showStatus={false} 
  showArrows={false} 
  showIndicators={false}
  interval={1000}
>
  <div className="hero-slide" style={{ backgroundImage: `url(${slide1})` }}>
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <h1>Welcome to the CSD & CSIT Department!</h1>
      <p>Innovate, explore, and excel in the world of Comuter Science.<br/> Join us to shape the future and transform possibilities into reality!</p>
      <button className="hero-buttons"  onClick={() => navigate("/about")}>Explore more</button>
    </div>
  </div>
  <div className="hero-slide" style={{ backgroundImage:  'url("https://srkrec.edu.in/img/csd/gallery/2.jpg")'}}>
    <div className="hero-overlay"></div>
    <div className="hero-content">
    <h1>Welcome to the CSD & CSIT Department!</h1>
    <p>Innovate, explore, and excel in the world of Comuter Science.<br/> Join us to shape the future and transform possibilities into reality!</p>
    <button className="hero-buttons"  onClick={() => navigate("/about")}>Explore more</button>
    </div>
  </div>
  <div className="hero-slide" style={{ backgroundImage: `url(${slide2})`  }}>
    <div className="hero-overlay"></div>
    <div className="hero-content">
    <h1>Welcome to the CSD & CSIT Department!</h1>
    <p>Innovate, explore, and excel in the world of Comuter Science.<br/> Join us to shape the future and transform possibilities into reality!</p>
    <button className="hero-buttons"  onClick={() => navigate("/about")}>Explore more</button>
    </div>
  </div>
</Carousel>

      </header>

      <section className="about-section">
        <div className="about-container">
          <h2>About Our Department</h2>
          <p>We are committed to providing the highest quality education and research opportunities in various disciplines.</p>
        </div>
      </section>

      <Events />

      <section className="hods-container">
    
  <div className="hods-grid">
    <div className="hod-card">
      <img
        src="https://srkrec.edu.in/profiles/images/IT/780.jpg"
        alt="Dr. John Doe"
        className="hod-image"
      />
      <h3 className="hod-name">Dr. John Doe</h3>
      <p className="hod-role">Head of CSD Department</p>
    </div>
    <div className="hod-card">
      <img
        src="https://srkrec.edu.in/img/tech/techead.jpg"
        alt="Dr. Jane Smith"
        className="hod-image"
      />
      <h3 className="hod-name">Dr. Jane Smith</h3>
      <p className="hod-role">Head of CSIT Department</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
