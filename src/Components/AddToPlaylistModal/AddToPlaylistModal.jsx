import "./AddToPlaylistModal.css";

import { useContext, useState } from "react";
import { ActionTypes } from "../../Reducer/DataReducer";
import { DataContext } from "../../Context/DataContext";
import { DisplayContext } from "../../Context/DisplayContext";
import { useParams } from "react-router-dom";

export function AddToPlaylistModal() {
  const { videoId } = useParams();

  const { state, dispatch } = useContext(DataContext);
  const { toggleAddToPlaylistModal, setToggleAddToPlaylistModal } =
    useContext(DisplayContext);
  const [playlistForm, setPlaylistForm] = useState({ name: "" });
  const sortedPlaylist = state?.playlists?.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  return (
    <div
      className="AddToPlaylistModal"
      style={{
        display: toggleAddToPlaylistModal ? "flex" : "none",
      }}
    >
      <div>Add To Playlist</div>
      <input
        type="text"
        placeholder="Add New Playlist"
        value={playlistForm.name}
        onChange={(e) => {
          setPlaylistForm(() => ({
            ...playlistForm,
            name: e.target.value,
          }));
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: ActionTypes.CREATE_PLAYLIST,
            payload: { playlist: playlistForm },
          });
          setPlaylistForm({ name: "" });
        }}
        disabled={playlistForm.name === ""}
      >
        Create New Playlist
      </button>
      <div className="PlaylistScroll">
        <ul>
          {sortedPlaylist.map((playlist) => {
            return (
              <li
                key={playlist._id}
                onClick={() => {
                  dispatch({
                    type: ActionTypes.ADD_TO_PLAYLIST,
                    payload: { videoId, playlistId: playlist._id },
                  });
                  setPlaylistForm({ name: "" });
                  setToggleAddToPlaylistModal(false);
                }}
              >
                {playlist.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
