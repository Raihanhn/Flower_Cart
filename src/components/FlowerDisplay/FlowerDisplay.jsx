import React, { useContext } from "react";
import "./flowerdisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FlowerItem from "../FlowerItem/FlowerItem";

const FlowerDisplay = ({ category }) => {
  const { flower_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {flower_list.map((item, index) => {
          console.log(category, item.category);
          if (category === "All" || category === item.category) {
            return (
              <FlowerItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FlowerDisplay;
