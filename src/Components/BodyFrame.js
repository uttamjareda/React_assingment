import React, { Component } from "react";
import BodyItem from "./BodyItem";

export class BodyFrame extends Component {
  articles = [
    {
      weight: {
        imperial: "6 - 13",
        metric: "3 - 6",
      },
      height: {
        imperial: "9 - 11.5",
        metric: "23 - 29",
      },
      id: 1,
      name: "Affenpinscher",
      bred_for: "Small rodent hunting, lapdog",
      breed_group: "Toy",
      life_span: "10 - 12 years",
      temperament:
        "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      origin: "Germany, France",
      reference_image_id: "BJa4kxc4X",
      image: {
        id: "BJa4kxc4X",
        width: 1600,
        height: 1199,
        url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
      },
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      load:false
    };
  }

  async componentDidMount() {
    let url = "https://api.thedogapi.com/v1/breeds";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    // bhai ye setstate me sahi se set kiya karo yrr abhi to dimag kharab ho gya tha bahut hi jyada samaj hi nahi aa rha tha kuch sahi bta rha hu 5-6 ghante laga diye the 
    this.setState({ articles: parsedData});
  }

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
      </div>
    );
  }
}

export default BodyFrame;
