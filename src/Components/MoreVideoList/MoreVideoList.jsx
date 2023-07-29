import "./MoreVideoList.css";

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";

export function MoreVideoList() {
  const { state } = useContext(DataContext);
  const { videoId } = useParams();

  const filterMoreVideos = state?.videos?.filter(
    (video) => video?._id !== Number(videoId)
  );

  return (
    <div className="MoreVideoList">
      <div className="Header">More Videos:</div>
      <div className="MoreVideoListWrapper">
        {filterMoreVideos.map((video) => {
          return (
            <div className="MoreVideoCard">
              <img src={video.thumbnail} alt={video.title} />
              <div className="MoreVideoCardDescription">
                <div>{video.title}</div>
                <div>{video.category}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
