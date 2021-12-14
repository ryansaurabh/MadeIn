import React from "react";
import Chef from "./images/Chef.png";
import Kitchen from "./images/ShopSets.png";
import KitchenSet from "./images/Shopall.png";
import Rating from "./components/rating";
import Ratingg from "./components/ratingg";
import Cnbc from "./images/iconcnbc.png";
import Cook from "./images/iconcook.png";
import Star from "./images/iconstar.png";
import Food from "./images/iconfood.png";
import Flower from "./images/iconflower.png";
import Cooker from "./images/cooker.png";
import Carbonsteel from "./images/carbonsteel.png";
import Stainless from "./images/stainless.png";
import Knives from "./images/knives.png";
import Row from "./components/row";
import Roww from "./components/roww";
import Alinea from "./images/alinea.png";
import Brock from "./images/brock.png";
import Nancy from "./images/nancy.png";
import Material from "./images/iconmaterial.png";
import Cap from "./images/iconcap.png";
import Pan from "./images/iconpan.png";
import Insta from "./components/insta";
import Banana from "./images/banana.png";
import Chop from "./images/chop.png";
import Veg from "./images/veg.png";
import Symbol from "./images/symbol.png";

const iconData = [
  {
    image: Cnbc,
    content: "CBS top 100 startups",
  },
  {
    image: Cook,
    content:
      "Move aside all clads: This startups cookware is just as great for half the price ",
  },
  {
    image: Star,
    content: "40,000+ 5-star reviews",
  },
  {
    image: Flower,
    content: "Trusted by Michellin satrred restaurant across the country",
  },
  {
    image: Food,
    content:
      "These 5-ply pans are killer heat conductors turning out perfectly browned crepes",
  },
];
const Categorydata = [
  {
    image: Carbonsteel,
  },
  {
    image: Knives,
  },
  {
    image: Stainless,
  },
];
const Rowdata = [
  {
    image: Alinea,
  },
  {
    image: Brock,
  },
  {
    image: Nancy,
  },
];

const BuildData = [
  {
    image: Material,
    content: "Premium Raw Materials",
    additional:
      "We source the fine metals and partnered with world renowing artisans that do it with the right way",
  },
  {
    image: Cap,
    content: "Professional Quality",
    additional: "We are making premium tools accesible for chefs everywhere",
  },
  {
    image: Pan,
    content: "Free Shipping and Free Returns",
    additional:
      "we know well made products result in high performance ,longevity and customer happiness",
  },
];
const Instadata = [
  {
    image: Banana,
  },
  {
    image: Chop,
  },
  {
    image: Veg,
  },
];

export default function Landings() {
  return (
    <>
      <div
        style={{
          height: "4vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-evenly",
          justifyContent: "flex-end",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <p>OUR STORY</p>
        </div>
        <div style={{ marginRight: "20px" }}>
          <p>REVIEWS</p>
        </div>
        <div style={{ marginRight: "20px" }}>
          <p>CAKE</p>
        </div>
        <div style={{ marginRight: "20px" }}>
          <p>BLOG</p>
        </div>
      </div>

      <div
        style={{
          height: "7vh",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-evenly",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "20px", color: "red", fontStyle: "italic" }}>
          <p>Made-in</p>
        </div>
        <div style={{ marginLeft: "80px" }}>
          <p>COOKEWARE</p>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <p>BAKEWARE</p>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <p>KNIVES</p>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <p>TABLETOPS</p>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <p>ACCESORIES</p>
        </div>
      </div>

      <div
        style={{
          height: "89vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${Chef})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            width: "70%",
          }}
        >
          <p>sSean Brock x Made In</p>
        </div>
        <div style={{ width: "30%" }}>
          <div
            style={{
              backgroundImage: `url(${Kitchen})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "44vh",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${KitchenSet})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "45vh",
              width: "100%",
              backgroundColor: "tomato",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyContent: "space-evenly",
        }}
      >
        {iconData.map((item) => (
          <Rating image={item.image} content={item.content} />
        ))}
      </div>
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div style={{ width: "400px" }}>
          <h1>What is behind Made In ?</h1>

          <p>
            Made in kitchen products are made in the best factories around the
            world. We have partenered with multi-generation factories and
            artisans to create a line of kitchenware that will make you excited
            to cook
          </p>
        </div>
        <div style={{ marginRight: "50px" }}>
          <img src={Cooker} />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Categories</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {Categorydata.map((i) => (
            <Row image={i.image} />
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "15vh" }}>
        <h1>The Pros are turning to Made In</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {Rowdata.map((i) => (
            <Roww image={i.image} />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyContent: "space-evenly",
        }}
      >
        {BuildData.map((item) => (
          <Ratingg
            image={item.image}
            content={item.content}
            additional={item.additional}
          />
        ))}
      </div>
      <div>
        <div style={{ textAlign: "center", marginTop: "15vh" }}>
          <h1>Instagram</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {Instadata.map((i) => (
              <Insta image={i.image} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Ready to get going?</h1>
        <p>
          Start by browsing the whole collection of stainless clad pans, chef
          knives, and carbon steel
        </p>
        <div style={{ border: "50px" }}>
          <p>Browse Cookware</p>
        </div>
      </div>

      <div
        style={{
          width: "100vw",
          height: "60vh",
          backgroundColor: "lightgray",
          fontSize: "13px",
        }}
      >
        <div style={{textAlign:'center', paddingTop:'25px'}}>
          <h1>
            STAINLESS STEEL COOKWARE, CARBON STEEL COOKWARE, COOKWARE SETS
            DELIVERED DIRECT TO YOUR DOOR
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent:'space-evenly' }}>
          <div style={{ marginTop: "10vh" }}>
            <img src={Symbol} />
            <p> 2021 Made In Cookware</p>
          </div>
          <div>
            <p>Reviews</p>
            <p>Shop Now. Pay Later</p>
            <p>Recycle Program</p>
            <p>Blog</p>
            <p>Help Center</p>
            <p>Privacy</p>
          </div>
          <div>
            <p>Returns</p>
            <p>Accessibility</p>
            <p>Restaurant Supply</p>
            <p>Corporate Gifting</p>
            <p>Design Trade Program</p>
            <p>Registry Help</p>
          </div>
          <div>
            <p>Stay in Know</p>
            <p>@madeincookware</p>
          </div>
        </div>
      </div>
    </>
  );
}
