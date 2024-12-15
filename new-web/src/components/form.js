import React,{Component} from "react";
import './form.css'

class Form extends Component {
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div className="container form">
                <h1><b>Contact Us</b></h1>
                <div className="mb-3">

  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
  
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"></input>
</div>
<div className="mb-3">
  
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="What is your reason for contacting us?"></textarea>
</div>

<button> <a href="jasonjohnson4529296@gmail.com">Send Message</a></button>
            </div>
        )
    }
}
export default Form;