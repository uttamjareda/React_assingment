import React, { Component } from "react";
import DogsItem from "./DogsItem";

export class DogsBody extends Component {
  render() {
    return <div>
        this is a body compnent
        <DogsItem title="mytitle" description="mydescription"/>
        <DogsItem/>
        <DogsItem/>
        <DogsItem/>
        <DogsItem/>
        </div>;
  }
}

export default DogsBody;
