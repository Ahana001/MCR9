import "./VideoList.css";

import { VideoCard } from "../VideoCard/VideoCard";
import { VideoCardShimmer } from "../VideoCardShimmer/VideoCardShimmer";
import { useLocation } from "react-router-dom";
import { ActionTypes } from "../../Reducer/DataReducer";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

export function VideoList({ listHeader, list }) {
  const location = useLocation();
  const { dispatch } = useContext(DataContext);

  if (list.length === 0) {
    return <VideoCardShimmer />;
  }
  return (
    <div className="VideoList">
      <h2>{listHeader}</h2>
      {location.pathname.includes("/explore") ? (
        <input
          type="text"
          onChange={(e) => {
            dispatch({
              type: ActionTypes.SET_SEARCH_TEXT,
              payload: { search: e.target.value },
            });
          }}
        />
      ) : null}
      <div className="VideoListConatiner">
        {list.map((video) => {
          return <VideoCard key={video._id} video={video} />;
        })}
      </div>
    </div>
  );
}
