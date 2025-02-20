import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Discover the Rich Heritage of India</h1>
        <p>Explore the cultural and historical beauty of our land</p>
        <Link to="/destinations" className="explore-btn">
          Explore Now
        </Link>
      </header>

      {/* Featured Destinations Section */}
      <section className="featured-destinations">
        <h2>Top Heritage Destinations</h2>
        <div className="destination-list">
          <div className="destination-card">
            <img src="\images\Tanjore.jpg" alt="Tanjore Temple" />
            <h3>Tanjore Temple</h3>
          </div>
          <div className="destination-card">
            <img src="/images/mysore-palace.jpg" alt="Mysore Palace" />
            <h3>Mysore Palace</h3>
          </div>
          <div className="destination-card">
            <img src="/images/hampi.jpg" alt="Hampi Ruins" />
            <h3>Hampi Ruins</h3>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>Why Visit Heritage Sites?</h2>
        <p>
          India is home to a rich history filled with architectural marvels and cultural treasures.
          Experience the grandeur of our heritage and relive the stories of the past.
        </p>
        <Link to="/about" className="learn-more-btn">
          Learn More
        </Link>
      </section>

      {/* Call-to-Action */}
      <section className="cta-section">
        <h2>Plan Your Heritage Trip Today!</h2>
        <p>Explore the best destinations, book your trips, and create unforgettable memories.</p>
        <Link to="/bookings" className="book-now-btn">
          Book Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
