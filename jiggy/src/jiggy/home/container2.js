import React, { useEffect, useRef, useState } from 'react';
import './container2.css';
import img1 from './jiggyp/Screenshot 2024-12-30 162757.png';
import img2 from './jiggyp/Screenshot 2024-12-30 162824.png';
import img3 from './jiggyp/Screenshot 2024-12-30 162855.png';
import img4 from './jiggyp/Screenshot 2024-12-30 162935.png';
import img5 from './jiggyp/Screenshot 2024-12-30 163155.png';
import img6 from './jiggyp/Screenshot 2024-12-30 163223.png';
import img7 from './jiggyp/Screenshot 2024-12-30 163257.png';
import img8 from './jiggyp/Screenshot 2024-12-30 163316.png';
import img9 from './jiggyp/Screenshot 2024-12-30 163337.png';

const Container2 = () => {

   const sectionRef = useRef(null); 
      const popupRef = useRef(null);   
      const popupImageRef = useRef(null); 
      const closePopupRef = useRef(null); 
  
      const [popupVisible, setPopupVisible] = useState(false); 
  
      
      const handleImageClick = (event) => {
          setPopupVisible(true);
          popupRef.current.style.display = 'flex';
          popupImageRef.current.src = event.target.src; 
      };
  
      const handleCloseClick = () => {
          setPopupVisible(false);
          popupRef.current.style.display = 'none'; 
      };
  
      const handlePopupClick = (e) => {
          if (e.target === popupRef.current) {
              setPopupVisible(false);
              popupRef.current.style.display = 'none'; 
          }
      };
  
      
      const handleScroll = () => {
          if (popupVisible) {
              setPopupVisible(false);
              popupRef.current.style.display = 'none'; 
          }
      };
      useEffect(() => {
        window.addEventListener('scroll', handleScroll); 

        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [popupVisible]); 


  // second transition

  useEffect(() => {
    const elements = Array.from(
      sectionRef.current.querySelectorAll(".thumbnail img") 
    );

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); 
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
    <div className="container c2" ref={sectionRef} id='c2'>
      <div>
        <h1 className="h">RECENT WORKS</h1>
      </div><br></br>
      <h3><i>VISUALS</i></h3>
      <div className='row'>
        
        <div className='col-6 col-lg-6'>
          <iframe src='https://youtube.com/embed/Yud8HCeNQjo?feature=shared' allowFullScreen ></iframe>
        </div>
        {/* <div className='col-6 col-lg-3'></div> */}
        <div className='col-6 col-lg-6'>
          <iframe src='https://youtube.com/embed/fCl4Pdy_LAk?feature=shared' allowFullScreen></iframe>
        </div>
      </div><br></br>
      <h3><i>IMAGES</i></h3>
      <div className="row">
        <div className="col-6 col-lg-3">
          <div className="thumbnail">
            <img src={img1} className="img-thumbnail" alt="" onClick={handleImageClick} />
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="thumbnail">
            <img src={img2} className="img-thumbnail" alt="" onClick={handleImageClick}/>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="thumbnail">
            <img src={img3} className="img-thumbnail" alt="" onClick={handleImageClick}/>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="thumbnail">
            <img src={img4} className="img-thumbnail" alt="" onClick={handleImageClick}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-lg-3">
          <div className="thumbnail">
            <img src={img5} className="img-thumbnail" alt="" onClick={handleImageClick}/>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="thumbnail">
            <img src={img6} className="img-thumbnail" alt="" onClick={handleImageClick}/>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="thumbnail">
            <img src={img7} className="img-thumbnail" alt="" onClick={handleImageClick}/>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="thumbnail">
            <img src={img8} className="img-thumbnail" alt="" onClick={handleImageClick}/>
          </div>
        </div>
      </div>
           <div className="popup" ref={popupRef} onClick={handlePopupClick}>
                <span className="close" ref={closePopupRef} onClick={handleCloseClick}>&times;</span>
                <img className="popup-image" ref={popupImageRef} src="" alt="" />
            </div>

      <div className="c2l">
        <a href="/portfolio">PORTFOLIO</a>
      </div>
    </div>
  );
};

export default Container2;
