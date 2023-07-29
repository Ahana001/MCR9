import "./CreatePlayListModal.css";

import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";

import { DisplayContext } from "../../Context/DisplayContext";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/DataReducer";

export function CreatePlayListModal() {
  const { toggleCreatePlaylistModal, setToggleCreatePlaylistModal } =
    useContext(DisplayContext);
  const { dispatch } = useContext(DataContext);
  const [playlistForm, setPlaylistForm] = useState({ name: "" });
  return (
    <div
      className="ModalPortal"
      style={{ display: toggleCreatePlaylistModal ? "block" : "none" }}
    >
      <div className="ModalOverlay">
        <div className="ModalPortalContent">
          <div
            className="ModalPortalCloseButton"
            onClick={() => {
              setToggleCreatePlaylistModal(false);
            }}
          >
            <RxCross1 />
          </div>
          <div className="CreatePlaylistForm">
            <h2>Add Playlist</h2>
            <input
              type="text"
              placeholder="Add New Playlist"
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
                setToggleCreatePlaylistModal(false);
              }}
              disabled={playlistForm.name === ""}
            >
              Create New Playlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
