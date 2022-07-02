import React, { Component } from 'react'

export class DogsItem extends Component {
  render() {
    return (
      <div>
        let {{title,description}} = this.props;
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      </div>
    )
  }
}

export default DogsItem