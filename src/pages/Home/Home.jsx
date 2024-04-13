import React, { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FlowerDisplay from "../../components/FlowerDisplay/FlowerDisplay";
import DoubleClick from "../../components/DoubleClick/DoubleClick";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FlowerDisplay category={category} />
      <DoubleClick />
    </div>
  );
};

export default Home;
