import "./CategoryList.css";

import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { CategoryCardShimmer } from "../CategoryCardShimmer/CategoryCardShimmer";

export function CategoryList() {
  const { state } = useContext(DataContext);

  if (state?.categories?.length === 0) {
    return <CategoryCardShimmer />;
  }

  return (
    <div className="CategoryList">
      <h2>Categories</h2>
      <div className="CategoryListConatiner">
        {state.categories.map((category) => {
          return <CategoryCard category={category} key={category._id} />;
        })}
      </div>
    </div>
  );
}
