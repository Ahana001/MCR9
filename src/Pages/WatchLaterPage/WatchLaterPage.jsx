import "./WatchLaterPage.css";

import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { UIStructure } from "../../Components/UIStructure/UIStructure";
import { VideoList } from "../../Components/VideoList/VideoList";

export function WatchLaterPage() {
  const { state } = useContext(DataContext);

  const filterWatchLaterVideos = state?.videos?.filter(
    (video) => video?.isWatchLater
  );

  return (
    <UIStructure>
      <VideoList list={filterWatchLaterVideos} listHeader="Watch Later" />
    </UIStructure>
  );
}
