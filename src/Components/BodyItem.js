
import React, { Component } from "react";

export class BodyItem extends Component {
  
   
  
    render() {

        let {name,height,weight,lifeSpan,bredGroup,origin,ImageUrl}=this.props;


    return (  

        <div className="card" style={{width: "18rem"}}>
            <img src={ImageUrl} alt="" className="card-img" />
            <div className="card-body col">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-text">
                Bred Group: {bredGroup?bredGroup:"Data Unvailable"} <br />
                Height: {height} Cm  <br />
                Weight: {weight} Kg<br />
                Life Span: {lifeSpan} <br />
                Origin: {origin?origin:"Data Unvailable"}
                </h6>
            </div>
        </div>

    );
  }
}

export default BodyItem;


