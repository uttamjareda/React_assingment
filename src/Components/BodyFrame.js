import React, { Component } from "react";
import BodyItem from "./BodyItem";

export class BodyFrame extends Component {
  render() {
    return (
      <div className="container my-10 ">
        <h2>this is a website on dogs</h2>

        <div className="row">
                <div className="col-md-4">
                    <BodyItem title="mytitle" description="mydescription" />
                </div>
                <div className="col-md-4">
                    <BodyItem title="mytitle" description="mydescription" />
                </div>
                <div className="col-md-4">
                    <BodyItem title="mytitle" description="mydescription" />
                </div>
        </div>

        <div className="row">
                <div className="col-md-4">
                    <BodyItem title="mytitle" description="mydescription" ImageUrl="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg" />
                </div>
                <div className="col-md-4">
                    <BodyItem title="mytitle" description="mydescription" />
                </div>
                <div className="col-md-4">
                    <BodyItem title="mytitle" description="mydescription" />
                </div>
        </div>

      </div>
    );
  }
}

export default BodyFrame;
