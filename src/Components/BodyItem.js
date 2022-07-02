
import React, { Component } from "react";

export class BodyItem extends Component {
  
    constructor(){
        super();
    }
  
  
    render() {

    let {title,description,ImageUrl}=this.props;

    return (  
        <div className="card my-3" style={{width: "18rem"}}>
          <img src={ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="/" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>

    );
  }
}

export default BodyItem;
