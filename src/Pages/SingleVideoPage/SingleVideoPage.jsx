import "./SingleVideoPage.css";

import { useContext } from "react";
import { UIStructure } from "../../Components/UIStructure/UIStructure";
import { DataContext } from "../../Context/DataContext";
import { useParams } from "react-router-dom";
import { SingleVideo } from "../../Components/SingleVideo/SingleVideo";
import { MoreVideoList } from "../../Components/MoreVideoList/MoreVideoList";

export function SingleVideoPage() {
  const { state } = useContext(DataContext);
  const { videoId } = useParams();

  const filterVideo = state?.videos?.find(
    (video) => video?._id === Number(videoId)
  );

  return (
    <UIStructure>
      <div className="SingleVideoPage">
        <div className="SingleVideoConatiner">
          <SingleVideo video={filterVideo} />
        </div>
        <div className="MoreVideosConatiner">
          <MoreVideoList />
        </div>
      </div>
    </UIStructure>
  );
}
