import React, { Component } from "react";
import BodyItem from "./BodyItem";
import Spinner from "./Spinner";

export class BodyFrame extends Component {
  //   articles = [];
// we have total 264 results, so limit=12 then 22 pages
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



   handleNextClick = async () => {
    console.log("Next Clicked");
    let url = `https://api.thedogapi.com/v1/breeds?limit=${this.props.limit}&page=${this.state.page+1}&order=Asc`;
    this.setState({load:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState(
        {
            page:this.state.page+1,
            articles: parsedData,
            load:false
        }
    )
  };




  handlePrevClick = async () => {
    console.log("Prev Clicked");
    let url = `https://api.thedogapi.com/v1/breeds?limit=${this.props.limit}&page=${this.state.page-1}&order=Asc`;
    this.setState({load:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState(
        {
            page:this.state.page-1,
            articles: parsedData,
            load:false
        }
    )
  };

  render() {
    return (
        
        <div>
            <h2 className="text-center welcometext" style={{padding: "1rem"}}>Welcome to WoofWoof</h2>
            {this.state.load && <Spinner/>}

            <div className="container bodyframe">
                {!this.state.load && this.state.articles.map((element) => {
                return (
                    <div className="container col" style={{padding: "1rem"}} key={element.id}>
                        <BodyItem
                        name={element.name}
                        height={element.height.metric}
                        weight={element.weight.metric}
                        lifeSpan={element.life_span}
                        bredGroup={element.breed_group}
                        origin={element.origin}
                        ImageUrl={element.image.url}
                        />
                    </div>
                );
                })}

            </div>

        <div className="container d-flex justify-content-between my-3">
            <button disabled={this.state.page<=0} type="button" onClick={this.handlePrevClick}>&larr; Prev</button>
            <button type="button" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>

        </div>
    );
  }
}

export default BodyFrame;
