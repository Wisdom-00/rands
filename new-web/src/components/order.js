import React, {Component} from "react"
import './order.css'

class Order extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid" id="order">
                <h1>Order Deliciousness On-The-Go!</h1>
                <h4>Taste the Goodness of Fast Food Flavors</h4>
                <p>We combine taste and quality to serve you a delightful array of mouthwatering dishes, crafted with passion and made to perfection.</p>
                <button className="btn btn-outline"><a href="09131090271">Order Now</a></button>
            </div>
        )
    }
}
export default Order;