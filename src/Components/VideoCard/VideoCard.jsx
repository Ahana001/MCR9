import { useContext } from "react";
import "./VideoCard.css";

import { MdWatchLater, MdOutlineWatchLater } from "react-icons/md";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

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
  const navigator = useNavigate();
  const location = useLocation();
  const { playlistId } = useParams();
  const { dispatch } = useContext(DataContext);
  return (
    <div
      className="VideoCardContainer"
      onClick={() => {
        navigator(`/video/${_id}`);
      }}
    >
      {location.pathname.includes("/playlist/") ? (
        <RxCross1
          className="VideoRemoveButton"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({
              type: ActionTypes.REMOVE_FROM_PLAYLIST,
              payload: { playlistId: playlistId, videoId: _id },
            });
          }}
        />
      ) : null}
      <div className="ImageContainer">
        <img src={thumbnail} alt={title} />
        <div
          className="WatchContainer"
          onClick={(e) => {
            e.stopPropagation();
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
    </div>
  );
}
