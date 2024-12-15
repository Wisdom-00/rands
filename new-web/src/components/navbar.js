import React,{Component} from "react";
import './navbar.css';


class Navbar extends Component {
    constructor(props){
        super(props);

    }


    render(){
        return(
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Mingles</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Services</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Gallery</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Contact</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">About</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="#"><i><b>Mingles</b></i></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" aria-current="page" href="#carouselExampleFade">Home</a>
      <a class="nav-link" href="#services">Services</a>
      <a class="nav-link" href="#gallery">Gallery</a>
      <a class="nav-link" href="#order">Contact</a>
      <a class="nav-link" href="#about">About</a>
      <button className="btn btn-success">Order Now</button>
    </div>
  </div>
</div>
</nav>
        )
    }
}

export default Navbar;