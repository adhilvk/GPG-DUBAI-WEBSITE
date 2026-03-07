import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h4 className="about-subtitle">GPG GLOBAL REAL ESTATE</h4>
          <h2 className="about-title">Creating Wealth for Generations</h2>
          
          <p className="about-description">
            Step into luxury living with GPG, where dreams find their perfect address. 
            Elevating Dubai's real estate standards, we specialize in buying and selling 
            premium residential and commercial properties.
          </p>

          <p className="about-description">
            At the forefront of the luxury estate sector in Dubai since 2021, we specialize 
            in selling iconic residential and commercial properties that offer unparalleled 
            and hidden opportunities for our exclusive clients.
          </p>

        </div>

        <div className="about-image-container">
          <img 
            src="/images/aboutpic.png" 
            alt="Luxury Real Estate GPG" 
            className="about-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;