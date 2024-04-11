import React, { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FlowerDisplay from "../../components/FlowerDisplay/FlowerDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FlowerDisplay category={category} />
    </div>
  );
};

export default Home;
