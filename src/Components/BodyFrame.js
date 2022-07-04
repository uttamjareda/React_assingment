import React, { Component } from "react";
import BodyItem from "./BodyItem";
import Spinner from "./Spinner";

export class BodyFrame extends Component {
  //   articles = [];
// we have total 264 results, we can change number of results per page using limit prop
  constructor() {
    super();
    this.state = {
      articles: [],
      load: false,
      page: 0,
    };
  }

//   fetching results from api and storing them in articles array by changing its state
  async componentDidMount() {
    let url = `https://api.thedogapi.com/v1/breeds?limit=${this.props.limit}&page=0&order=Asc`;
    this.setState({load:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({load:false})
    this.setState({ articles: parsedData });
  }


//function to get next page
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



// function to get previous page
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

            {/* spinner component is displayed while waiting  */}
            {this.state.load && <Spinner/>}

            <div className="container bodyframe">
                {/* iterating through articles array and when we have fetched data */}
                {!this.state.load && this.state.articles.map((element) => {
                return (
                    <div className="container" style={{padding: "1rem"}} key={element.id}>
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
            <button disabled={this.state.page<=0} className="btn" type="button" onClick={this.handlePrevClick}>&larr; Prev</button>
            <button className="btn" type="button" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>

        </div>
    );
  }
}

export default BodyFrame;
