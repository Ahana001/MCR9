import "./CategoryWiseVideosPage.css";

import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { UIStructure } from "../../Components/UIStructure/UIStructure";
import { useParams } from "react-router-dom";
import { VideoList } from "../../Components/VideoList/VideoList";

export function CategoryWiseVideosPage() {
  const { state } = useContext(DataContext);
  const { categoryName } = useParams();

  const filterCategoryWiseVideos = state?.videos?.filter(
    (video) => video?.category?.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <UIStructure>
      <VideoList list={filterCategoryWiseVideos} listHeader={categoryName} />
    </UIStructure>
  );
}
