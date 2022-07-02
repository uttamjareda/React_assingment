
import React, { Component } from "react";

export class BodyItem extends Component {
  
   
  
    render() {

        let {name,height,weight,lifeSpan,bredGroup,origin,ImageUrl}=this.props;

    // let {title,description,ImageUrl,itemId}=this.props;

    return (  
        <div className="card my-3" style={{width: "18rem"}}>
          <img src={ImageUrl} className="card-img-top" alt="Error ._." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            
            <h6 className="card-text">
              Bred Group: {bredGroup} <br />
              Height: {height} Cm  <br />
              Weight: {weight} Kg<br />
              Life Span: {lifeSpan} <br />
              Origin: {origin}
            </h6>
            <a href="/" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>

    );
  }
}

export default BodyItem;
