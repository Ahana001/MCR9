import "./CategoryCard.css";
import { Link } from "react-router-dom";

export function CategoryCard({ category: { thumbnail, src, category } }) {
  return (
    <Link className="CategoryCardContainer" to={`/videos/${category}`}>
      <img src={thumbnail} alt="category" />
      <div>{category}</div>
    </Link>
  );
}
