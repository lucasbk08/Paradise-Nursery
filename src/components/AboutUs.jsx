import './AboutUs.css';

function AboutUs({ onGetStarted }) {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <div className="about-content">
          <div className="about-logo">🌿</div>
          <h1 className="about-title">Paradise Nursery</h1>
          <p className="about-tagline">Where Green Meets Serenity</p>
          <div className="about-divider" />
          <p className="about-description">
            Welcome to Paradise Nursery, your one-stop destination for beautiful,
            healthy plants. Whether you're looking to purify your air, add fragrance
            to your home, or simply bring a touch of nature indoors, we have the
            perfect plant for you.
          </p>
          <p className="about-description">
            Our carefully curated collection includes air purifying plants, aromatic
            varieties, medicinal herbs, insect repellents, and low-maintenance options
            — all sourced with love and expertise.
          </p>
          <button className="get-started-btn" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
