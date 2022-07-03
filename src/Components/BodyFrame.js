import React, { Component } from "react";
import BodyItem from "./BodyItem";

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
    let url = `https://api.thedogapi.com/v1/breeds?limit=12&page=4`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData });
  }

   handleNextClick = async () => {
    console.log("Next Clicked");
    this.setState(
        {
            page:this.page+1
        }
    )
    console.log(this.page)
  };

  handlePrevClick = async () => {
    console.log("Prev Clicked");
  };

  render() {
    return (
      <div className="container my-10 ">
        <h2>this is a website on dogs</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.id}>
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
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page<=0}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default BodyFrame;
