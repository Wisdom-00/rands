import React, { useEffect, useRef } from 'react';
import './container1.css';

const Container1 = () => {
  const sectionRef1 = useRef(null); 

  useEffect(() => {
    const elements = Array.from(
      sectionRef1.current.querySelectorAll('.fade-in') 
    );

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, 
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
    <div className='container home' ref={sectionRef1}>
      <div>
        <h1 className="fade-in">ACE MEDIA BY <span className='homespan'>JIGGY</span></h1>
        <p className="fade-in">Telling Stories One Photo At A Time</p>
        <a className="c1l fade-in" href='/portfolio'>Portfolio</a>
      </div>
      <a href='#c2' className='c1a'><span class="material-symbols-outlined">keyboard_arrow_down</span></a>
    </div>
  );
};

export default Container1;
