import "./HomePage.css";

import { UIStructure } from "../../Components/UIStructure/UIStructure";
import { CategoryList } from "../../Components/CategoryList/CategoryList";

export function HomePage() {
  return (
    <UIStructure>
      <CategoryList />
    </UIStructure>
  );
}
