import { useContext } from "react";
import "./PlayListCard.css";

import { RxCross1 } from "react-icons/rx";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";
import { Link } from "react-router-dom";

export function PlayListCard({ playlist }) {
  const { dispatch } = useContext(DataContext);

  return (
    <div className="PlayListCardContainer">
      <RxCross1
        className="VideoRemoveButton"
        onClick={() => {
          dispatch({
            type: ActionTypes.DELETE_PLAYLIST,
            payload: { playlistId: playlist._id },
          });
        }}
      />
      <Link to={`/playlist/${playlist._id}`}>
        <img src={playlist.thumbnail} alt="playListThumbnail" />
        <div>{playlist.name}</div>
      </Link>
    </div>
  );
}
