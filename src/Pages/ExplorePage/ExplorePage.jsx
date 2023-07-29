import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { VideoList } from "../../Components/VideoList/VideoList";
import { UIStructure } from "../../Components/UIStructure/UIStructure";

export function ExplorePage() {
  const { state } = useContext(DataContext);
  const filterVideoBySearchText = state?.videos?.filter((video) => {
    return video?.title?.toLowerCase()?.includes(state?.search?.toLowerCase());
  });
  return (
    <UIStructure>
      <VideoList list={filterVideoBySearchText} listHeader="Explore" />
    </UIStructure>
  );
}
