import { 
    faCheckCircle, 
    faArrowRight,
    faStar,
    faStarHalfAlt,
    faMapMarkerAlt,
    faPhone,
    faEnvelope
  } from '@fortawesome/free-solid-svg-icons';
  import { 
    faFacebookF, 
    faInstagram, 
    faTwitter, 
    faYoutube 
  } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import './Home.css';
  import aboutlogo from "../logoassets/aboutlogo.png";
  import heroimage from "../logoassets/g1.jpg";
  
  const Home = () => {
    return (
      <main className="home-container">
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Welcome to FamVille</h1>
              <p>Come as Guests, Stay as Family.</p>
              {/* <div className="hero-buttons">
                <a href="#" className="btn-primary">Explore</a>
                <a href="#" className="btn-secondary">Learn More</a>
              </div> */}
            </div>
            <div className="hero-image">
              <img src={heroimage} alt="Happy family" className="hero-img" />
            </div>
          </div>
        </section>
  
        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="about-image">
              <img src={aboutlogo} alt="FamVille logo" className="about-img" />
            </div>
            <div className="about-content">
              <h2>About FamVille</h2>
              <p>Tired of finding a new place to live in? 
<br></br>
Don't worry!  We're here to help.
<br></br>
We are a one stop solution to your renting troubles. Live hassle free in your own space that is high on convenience and flexibility. 
<br></br>Find your family in 

The FamVille® community.</p>
              
            </div>
          </div>
        </section>
  
         {/* Services Section */}
         <section id="services" className="services">
          <div className="container">
            <h2>Our Services</h2>
            <p className="section-subtitle">Discover what we offer to make your family life better</p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon="home" />
                </div>
                <h3>Family Housing</h3>
                <p>Modern, comfortable living spaces designed with families in mind.</p>
                <a href="#" className="btn-text">Learn more <FontAwesomeIcon icon={faArrowRight} /></a>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon="child" />
                </div>
                <h3>Childcare</h3>
                <p>Safe, nurturing environments for children of all ages.</p>
                <a href="#" className="btn-text">Learn more <FontAwesomeIcon icon={faArrowRight} /></a>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon="utensils" />
                </div>
                <h3>Family Dining</h3>
                <p>Healthy meal options for the whole family.</p>
                <a href="#" className="btn-text">Learn more <FontAwesomeIcon icon={faArrowRight} /></a>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon="calendar-alt" />
                </div>
                <h3>Activities</h3>
                <p>Engaging programs for all family members.</p>
                <a href="#" className="btn-text">Learn more <FontAwesomeIcon icon={faArrowRight} /></a>
              </div>
            </div>
          </div>
        </section>
  
        {/* Community Section
        <section id="community" className="community">
          <div className="container">
            <h2>Our Community</h2>
            <p className="section-subtitle">See what makes FamVille special</p>
            
            {/* <div className="testimonials">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src="/images/testimonial-1.jpg" alt="Sarah Johnson" />
                </div>
                <p>"FamVille has transformed our family life. The community support is incredible!"</p>
                <h4>- Sarah Johnson</h4>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img src="/images/testimonial-2.jpg" alt="Michael Chen" />
                </div>
                <p>"Our kids have made lifelong friends here. We couldn't be happier!"</p>
                <h4>- Michael Chen</h4>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
              </div>
            </div> */}
            
            {/* <div className="gallery">
              <h3>Life at FamVille</h3>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="/images/gallery-1.jpg" alt="Community event" />
                </div>
                <div className="gallery-item">
                  <img src="/images/gallery-2.jpg" alt="Children playing" />
                </div>
                <div className="gallery-item">
                  <img src="/images/gallery-3.jpg" alt="Family picnic" />
                </div>
                <div className="gallery-item">
                  <img src="/images/gallery-4.jpg" alt="Community garden" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
  
        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-content">
              <h2>Get In Touch</h2>
              <p>Have questions? Want to schedule a tour? We'd love to hear from you!</p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <p>123 Family Lane, Community City, CC 12345</p>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>(123) 456-7890</p>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>info@famville.com</p>
                </div>
              </div>
              
              <div className="social-links">
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
            </div>
            
            <div className="contact-form">
              <form id="contactForm">
                <div className="form-group">
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" id="phone" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <textarea id="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default Home;