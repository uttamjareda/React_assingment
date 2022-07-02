import React, { Component } from 'react'
import BodyItem from './BodyItem'

export class BodyFrame extends Component {
  render() {
    return (
      <div>
        this is body frame
        <BodyItem/>
        <BodyItem/>
        <BodyItem/>
        <BodyItem/>
        <BodyItem/>
      </div>
    )
  }
}

export default BodyFrame