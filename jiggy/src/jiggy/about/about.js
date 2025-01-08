import React, { useEffect, useRef } from 'react';
import './about.css';
import imga from './Screenshot 2024-12-31 180555.png';

const About = () => {
  const sectionRef = useRef(null); 

  useEffect(() => {
    
    const elements = Array.from(sectionRef.current.querySelectorAll('.fade-in'));

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
          observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='container-fluid about-container'>
      <div className='about'>
        <div className='row'>
          
          <div className='col-lg-3 col-12 imgab'>
            <img src={imga} alt="Ace Media by Jiggy" className='aboutimg' />
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-7 col-12' ref={sectionRef}>
            <h2 className="fade-in">Welcome to ACE Media by Jiggy: Your Creative Hub for Photography, Videography, and Editing in Abuja, Nigeria</h2>
            <div className="fade-in">
              <p>At ACE Media by Jiggy, we transform moments into lasting memories. Based in Lugbe, Abuja, we specialize in photography, videography, and editing services that bring your vision to life. Whether it’s capturing your wedding day, promoting your brand, or curating content for social media, we’re here to make it extraordinary.</p>

              <h3 className="fade-in">Who I Am</h3>
              <p className="fade-in">I’m Jiggy(Akinbowale), with a passion for creating beautiful, timeless visuals be it images or videos that make an impact. Based in Abuja, I bring a creative eye and technical expertise to every shoot, ensuring that your memories are captured in the best possible light. Whether it’s a personal event, corporate function, or a special project, I work closely with my clients to deliver exceptional results.</p>

              <h3 className="fade-in">Our Services</h3>
              <p className="fade-in"><b>Photography:</b> Capturing life’s best moments with a touch of elegance. We specialize in portraits, events, product photography, and more.</p>
              <p className="fade-in"><b>Videography:</b>Whether it’s cinematic storytelling or dynamic event coverage, our videos leave a lasting impression.</p>
              <p className="fade-in"><b>Editing:</b> Post-production magic that polishes your visuals to perfection. We handle color grading, sound design, and seamless transitions to ensure top-tier quality.</p>
              <p className="fade-in"><b>Custom Packages:</b> Tailored sessions to suit your specific needs and vision.</p>

              <h3 className="fade-in">Why Choose Ace Media by Jiggy?</h3>
              <p className="fade-in"><b>Creative Expertise:</b> With years of experience, our team combines artistic flair and technical precision to deliver stunning visuals tailored to your needs..</p>
              <p className="fade-in"><b>Customised Services:</b>Whether it’s a personal shoot or a large-scale corporate project, we provide bespoke solutions that match your style and objectives.</p>
              <p className="fade-in"><b>Affordable Packages:</b>Quality doesn’t have to break the bank. We offer flexible pricing to suit every budget without compromising on excellence.</p>

              <p className="fade-in">Ready to capture your special moments? <i>Ace Media by Jiggy</i> is here to make it happen. Get in touch today to book a session or discuss your needs!</p>
              <div className="nav-item dropdown c3dd">
              <div className="nav-item dropdown c3dd">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  BOOK NOW
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="https://Wa.me/+2349152576638">WHATSAPP</a></li>
                  <li><a className="dropdown-item" href="https://www.instagram.com/jiggy__a">INSTAGRAM</a></li>
                  <li><a className="dropdown-item" href="https://www.x.com/jiggyhighstar">TWITTER</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="tel:+2349152576638">CALL</a></li>
                  <li><a className="dropdown-item" href="sms:+2349152576638">MESSAGE</a></li>
                </ul>
              </div>
    </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
        </div>
      </div>
    </div>
  );
}

export default About;
