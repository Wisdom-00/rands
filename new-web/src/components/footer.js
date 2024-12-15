import React,{Component} from "react";
import './footer.css'

class Footer extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="footer" id="about">
                <div className="row">
                    <div className="col-md-1 logs"><span class="material-symbols-outlined">
storefront
</span></div>
                    <div className="col-md-4">
                        <div>Order with the click of a button</div>
                        <button className="btn btn-outline"><a href="09131090271">Order Now</a></button>
                    </div>
                    <div className="col-md-3">
                        <h4><i>Mingles Restaurant!!!</i></h4>
                        <p><a href="#carouselExampleFade">Home</a></p>
                        <p><a href="#services">Services</a></p>
                        <p><a href="#gallery">Gallery</a></p>
                        <p><a href="#order">Contact</a></p>
                        <p><a href="#about">About</a></p>
                    </div>
                    <div className="col-md-3">
                        <h4><i>Come for...</i></h4>
                        <p>Breakfast</p>
                        <p>Brunch</p>
                        <p>Dinner</p>
                        <p>Lunch</p>
                        <p>Drinks</p></div>
                    <div className="col-md-2"></div>
                </div>
                <div className="foo">:<a href="www.instagram.com">Instagram</a><a href="www.facebook.com">Facebook</a>
</div>
            </div>
        )
    }
}
export default Footer;