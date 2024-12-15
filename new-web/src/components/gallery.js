import React,{Component} from "react";
import './gallery.css'

class Gallery extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="container-fluid gallery" id="gallery">
                <div className="head"><h1>OUR MENU...</h1></div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-lg-3">
                            <img className="card-img img-fluid" src="https://www.tandtnigeriandishes.com/images/menu_1.jpg"></img>
                            <div className="overlay"><i><b>Swallow!!!</b></i></div>
                    </div>
                    <div className="col-lg-3 fadeInLeft">
                            <img className="card-img img-fluid" src="https://www.tandtnigeriandishes.com/images/menu_5.jpg"></img>
                            <div className="overlay"><i><b>Moi-Moi!!!</b></i></div>
                    </div>
                    <div className="col-lg-3 fadeInLeft">
                            <img className="card-img img-fluid" src="https://www.tandtnigeriandishes.com/images/menu_7.jpg"></img>
                            <div className="overlay"><i><b>Beans and Plantain!!!</b></i></div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row">
                <div className="col-md-1"></div>
                    <div className="col-lg-3">
                            <img className="card-img img-fluid" src="https://images.unsplash.com/photo-1524802020103-aa46eaffcaa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                            <div className="overlay"><i><b>Beverages!!!</b></i></div>
                    </div>
                    <div className="col-lg-3 fadeInLeft">
                            <img className="card-img img-fluid" src="https://images.unsplash.com/photo-1519944781502-4ac8148b55e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                            <div className="overlay"><i><b>Coke!!!</b></i></div>
                    </div>
                    <div className="col-lg-3 fadeInLeft">
                            <img className="card-img img-fluid" src="https://images.unsplash.com/photo-1685627034816-a05d70ec6e09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                            <div className="overlay"><i><b>Canned Drinks!!!</b></i></div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row">
                <div className="col-md-1"></div>
                    <div className="col-lg-3">
                            <img className="card-img img-fluid" src="https://www.tandtnigeriandishes.com/images/menu_9.jpg"></img>
                            <div className="overlay"><i><b>Pepper Soup!!!</b></i></div>
                    </div>
                    <div className="col-lg-3 fadeInLeft">
                            <img className="card-img img-fluid" src="https://www.tandtnigeriandishes.com/images/menu_15.jpg"></img>
                            <div className="overlay"><i><b>Peppered Stew!!!</b></i></div>
                    </div>
                    <div className="col-lg-3 fadeInLeft">
                            <img className="card-img img-fluid" src="https://www.tandtnigeriandishes.com/images/menu_8.jpg"></img>
                            <div className="overlay"><i><b>Assorted!!!</b></i></div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="foot"><i><b>And much more!!!!!</b></i></div>
            </div>
        )
    }
}

export default Gallery;