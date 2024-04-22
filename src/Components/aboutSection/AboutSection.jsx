import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./aboutSection.css";
const AboutSection = () => {
  return (
    <div>
      <Header />
      <div className="about-us">
        {/* top section bg image */}
        <div className="hero-img section-gap">
          {/* overlay */}
          <div className="overlay"></div>

          {/* main content */}
          <div className="hero-content">
            <h1>About Us</h1>
          </div>
        </div>

        <div className="container">
          {/* History Section */}
          <div className="history section-gap">
            <h2 className="heading">Our History</h2>
            <p>
              Bean There" began its journey in 2005, nestled in the heart of
              downtown. What started as a humble venture by two coffee
              enthusiasts quickly evolved into a beloved community hub. With its
              warm ambiance and commitment to quality, Bean There became
              renowned for its meticulously sourced beans and expertly crafted
              brews. Over the years, it has grown into a cherished meeting
              place, where friendships are forged over aromatic cups of coffee.
              Embracing its roots, Bean There remains dedicated to fostering
              connections and enriching lives, one sip at a time. As it
              continues to thrive, its legacy as a beacon of coffee culture in
              the city endures.
            </p>
          </div>

          {/* Our Team Section */}
          <div className="teams section-gap">
            <h1 className="heading">Our Team</h1>
            <div class="team-section">
              <div class="team-member">
                <img
                  src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Member 1"
                />
                <h3>John</h3>
                <p class="role">Chef</p>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-facebook"></a>
              </div>
              <div class="team-member">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Member 2"
                />
                <h3>Aditiya</h3>
                <p class="role">Marketing</p>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-facebook"></a>
              </div>
              <div class="team-member">
                <img
                  src="https://images.pexels.com/photos/4307688/pexels-photo-4307688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Member 3"
                />
                <h3>Rashmi</h3>
                <p class="role">Finance</p>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-facebook"></a>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mission section-gap">
            <h2 className="heading">Our Mission</h2>
            <p>
              At Bean There, our mission is simple yet profound: to create
              memorable moments through exceptional coffee experiences. We
              believe that every cup tells a story, reflecting the care and
              passion poured into each bean. With a commitment to sustainability
              and ethical sourcing, we strive to support local farmers and
              communities while delivering the finest quality brews to our
              customers. Beyond serving coffee, we aim to cultivate a welcoming
              space where people can gather, connect, and find solace in the
              simple pleasures of life. Guided by our values of integrity,
              excellence, and community, we endeavor to leave a positive impact
              on both our patrons and the world around us. Welcome to Bean
              There, where every sip brings joy and fulfillment.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutSection;
