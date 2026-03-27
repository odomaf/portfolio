function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Welcome to My Portfolio</h1>
      <p className="hero-desc">
        Showcasing my work and skills with an accessible, vibrant palette.
        <br />
        <a href="https://github.com/odomaf/portfolio" className="hero-link" target="_blank" rel="noopener noreferrer">
          View source on GitHub
        </a>
      </p>
      <button className="hero-btn hero-btn-primary">View Projects</button>
      <button className="hero-btn hero-btn-secondary">Contact Me</button>
      <div className="hero-badge">
        <strong>Now available for freelance work!</strong>
      </div>
    </section>
  );
}

export default HeroSection;
