import React, {Component} from "react";
import './carousel.css'

class Carousel1 extends Component {
    constructor(props){
        super(props);

    }
    

    render(){
        return (
<div id="carouselExampleFade" className="carousel slide carousel-fade">
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src="https://images.unsplash.com/photo-1692071097529-320eb2b32292?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."></img>
    <div id="carousel" className="carousel-caption d-none d-md-block">
     <h5><b>Pasta!!!!</b></h5>
     <p><b><i>We Serve The Best And Only The Best</i></b></p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://images.unsplash.com/photo-1639031663212-27507c18ee84?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."></img>
    <div id="carousel" className="carousel-caption d-none d-md-block">
     <h5>Burgers!!!!</h5>
     <p><b><i>We Serve The Best And Only The Best</i></b></p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://images.unsplash.com/photo-1610057098265-05f2bcbedd55?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."></img>
    <div id="carousel" class="carousel-caption d-none d-md-block">
        <h5>Rice!!!!</h5>
        <p><b><i>We Serve The Best And Only The Best</i></b></p>
    </div>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>

        )
    }
}
export default Carousel1;