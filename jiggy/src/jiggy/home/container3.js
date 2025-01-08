import React, { useEffect, useRef } from 'react';
import './container3.css';

const Container3 = () => {
  const sectionRef = useRef(null); 

  useEffect(() => {
    const elements = Array.from(
      sectionRef.current.querySelectorAll('.col-lg-4') 
    );

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
    <div className="container-fluid c3" ref={sectionRef}>
      <h2 className='c3h1'>OUR SERVICES</h2>
      <div className="row">
        <div className="col-lg-4 col-4">
          <span className="material-symbols-outlined">photo_camera</span>
          <div className="cardtxt">VIDEOGRAPHY</div>
        </div>
        <div className="col-lg-4 col-4 cb">
          <span className="material-symbols-outlined span">image</span>
          <div className="cardtxt">PHOTOGRAPHY</div>
        </div>
        <div className="col-lg-4 col-4">
          <span className="material-symbols-outlined">landscape</span>
          <div className="cardtxt">DIRECTING</div>
        </div>
      </div>
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
  );
};

export default Container3;
