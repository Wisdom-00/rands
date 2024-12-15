import React, {Component} from "react";
import './container1.css';

class Container1 extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="container1" id="services">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <div><span className="material-symbols-outlined">restaurant</span></div>
                        <h3>Dine In</h3>
                        <p><b><i>Experience Flavorful Moments: Dine In and Savor Every Bite.</i></b></p>
                    </div>
                    <div className="col-md-4">
                    <div><span className="material-symbols-outlined">takeout_dining</span></div>
                        <h3>Take Away</h3>
                        <p><i><b>Delight in Convenience: Grab Your Favorite Flavors To Go.</b></i></p>
                    </div>
                    <div className="col-md-3">
                    <div><span className="material-symbols-outlined">motorcycle</span></div>
                        <h3>Home Delivery</h3>
                        <p><i><b>Bringing Joy to Your Doorstep: Enjoy the Comfort of Home Delivery.</b></i></p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default Container1;
