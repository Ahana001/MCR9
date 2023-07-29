import { useContext } from "react";
import "./VideoCard.css";

import { MdWatchLater, MdOutlineWatchLater } from "react-icons/md";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";
import { Link } from "react-router-dom";

export function VideoCard({
  video: {
    _id,
    title,
    views,
    chips,
    thumbnail,
    src,
    category,
    creator,
    isWatchLater,
  },
}) {
  const { dispatch } = useContext(DataContext);
  return (
    <Link className="VideoCardContainer" to={`/video/${_id}`}>
      <div className="ImageContainer">
        <img src={thumbnail} alt={title} />
        <div
          className="WatchContainer"
          onClick={() => {
            dispatch({
              type: ActionTypes.SET_VIDEO_WATCHED,
              payload: { videoId: _id },
            });
          }}
        >
          {isWatchLater ? <MdWatchLater /> : <MdOutlineWatchLater />}
        </div>
      </div>
      <div className="VideoDescription">
        <img src="https://picsum.photos/40/40" alt="userProfile" />
        <div className="VideoDesriptionWrapper">
          <div className="Title">{title}</div>
          <div className="Category">{category}</div>
          <div className="ViewsAndCreator">
            {views} views | {creator}
          </div>
        </div>
      </div>
    </Link>
  );
}
