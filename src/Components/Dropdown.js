import React, { Component } from 'react'

export class Dropdown extends Component {

    constructor() {
        super();
        this.state = {
          articles: [],
          load: false,
          page: 0,
          limit: 12,
        };
      }
    
      async componentDidMount() {
        let url = `https://api.thedogapi.com/v1/breeds?limit=${this.props.limit}&page=0&order=Asc`;
        this.setState({load:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({load:false})
        this.setState({ articles: parsedData });
      }



  render() {
    return (
      <div>Dropdown</div>
    )
  }
}

export default Dropdown