import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleNavbarCollapse = () => {
      const navbarCollapse = document.getElementById("navbarSupportedContent");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleNavbarCollapse);

    return () => {
      window.removeEventListener("scroll", handleNavbarCollapse);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link to="" className="navbar-brand" href="#">ACE<br></br><span className="spannav">MEDIA</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <Link className="nav-item" to="">
                <a className="nav-link " aria-current="page">HOME</a>
              </Link>
              <Link className="nav-item" to="/portfolio">
                <a className="nav-link ">PORTFOLIO</a>
              </Link>
              <Link className="nav-item" to="/about_us">
                <a className="nav-link ">ABOUT US</a>
              </Link>
              <div className="nav-item dropdown nd">
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
