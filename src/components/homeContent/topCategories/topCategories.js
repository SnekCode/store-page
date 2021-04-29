import React from "react";
import "./topCategories.css";
import CategoryCard from "./categoryCard";

function TopCategories() {
  return (
    <div className="topCategories">
      <h2 className="categoryHeading">Top Categories</h2>
      <div className="categories">
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg"
          }
          title={"Understanding Balance"}
        />
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg"
          }
          title={"Development"}
        />
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg"
          }
          title={"External Hacks"}
        />
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg"
          }
          title={"Reverse Engineering"}
        />
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg"
          }
          title={"Internal Hacks"}
        />
        <CategoryCard
          imgSrc={
            "https://s.udemycdn.com/home/top-categories/lohp-category-business.jpg"
          }
          title={"Cheat Engine"}
        />
      </div>
    </div>
  );
}

export default TopCategories;
