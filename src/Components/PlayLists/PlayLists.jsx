import "./PlayLists.css";

import { useContext } from "react";
import { GrAddCircle } from "react-icons/gr";

import { DataContext } from "../../Context/DataContext";
import { DisplayContext } from "../../Context/DisplayContext";

import { PlayListCard } from "../PlayListCard/PlayListCard";
import { CreatePlayListModal } from "../CreatePlayListModal/CreatePlayListModal";

export function PlayLists() {
  const { state } = useContext(DataContext);
  const { setToggleCreatePlaylistModal } = useContext(DisplayContext);

  return (
    <div className="PlayLists">
      <h2>Playlists</h2>
      <div className="PlayListsConatiner">
        {state?.playlists?.map((playlist) => {
          return <PlayListCard playlist={playlist} key={playlist._id} />;
        })}
        <div
          className="CreatePlayListButtonConatiner"
          onClick={() => {
            setToggleCreatePlaylistModal(true);
          }}
        >
          <GrAddCircle />
        </div>
      </div>
      <CreatePlayListModal />
    </div>
  );
}
