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
    {
      weight: {
        imperial: "50 - 60",
        metric: "23 - 27",
      },
      height: {
        imperial: "25 - 27",
        metric: "64 - 69",
      },
      id: 2,
      name: "Afghan Hound",
      country_code: "AG",
      bred_for: "Coursing and hunting",
      breed_group: "Hound",
      life_span: "10 - 13 years",
      temperament: "Aloof, Clownish, Dignified, Independent, Happy",
      origin: "Afghanistan, Iran, Pakistan",
      reference_image_id: "hMyT4CDXR",
      image: {
        id: "hMyT4CDXR",
        width: 606,
        height: 380,
        url: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
      },
    },
    {
      weight: {
        imperial: "44 - 66",
        metric: "20 - 30",
      },
      height: {
        imperial: "30",
        metric: "76",
      },
      id: 3,
      name: "African Hunting Dog",
      bred_for: "A wild pack animal",
      life_span: "11 years",
      temperament: "Wild, Hardworking, Dutiful",
      origin: "",
      reference_image_id: "rkiByec47",
      image: {
        id: "rkiByec47",
        width: 500,
        height: 335,
        url: "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
      },
    },
    {
      weight: {
        imperial: "40 - 65",
        metric: "18 - 29",
      },
      height: {
        imperial: "21 - 23",
        metric: "53 - 58",
      },
      id: 4,
      name: "Airedale Terrier",
      bred_for: "Badger, otter hunting",
      breed_group: "Terrier",
      life_span: "10 - 13 years",
      temperament:
        "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
      origin: "United Kingdom, England",
      reference_image_id: "1-7cgoZSh",
      image: {
        id: "1-7cgoZSh",
        width: 645,
        height: 430,
        url: "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
      },
    },
  ];

  constructor() {
    super();
    console.log("hello i am the constructor from news element ");
    this.state = {
      articles: this.articles,
      load: false,
    };
  }

  render() {
    return (
      <div className="container my-10 ">
        <h2>this is a website on dogs</h2>

        <div className="row">
          {this.state.articles.map((element) => {

            return (
              <div className="col-md-3" key= {element.id}>
                <BodyItem  
                  name={element.name}
                  height={element.height.metric}
                  weight={element.weight.metric}
                  lifeSpan={element.life_span}
                  bredGroup={element.breed_group}
                  origin={element.origin}
                  ImageUrl={element.image.url}
                // title={element.name} description={element.life_span}
                // ImageUrl={element.image.url} itemId="todo"
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
