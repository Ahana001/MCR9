import "./SingleVideo.css";

import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { MdWatchLater, MdOutlineWatchLater, MdEditNote } from "react-icons/md";
import { RiPlayListAddFill } from "react-icons/ri";
import { ActionTypes } from "../../Reducer/DataReducer";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { AddToPlaylistModal } from "../AddToPlaylistModal/AddToPlaylistModal";
import { DisplayContext } from "../../Context/DisplayContext";
import { AddNote } from "../../Components/AddNote/AddNote";

export function SingleVideo({ video }) {
  const { dispatch } = useContext(DataContext);
  const {
    toggleAddToPlaylistModal,
    setToggleAddToPlaylistModal,
    toggleAddNoteModal,
    setToggleAddNoteModal,
  } = useContext(DisplayContext);

  const sortedNotes = video?.notes?.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });
  if (!video) {
    return <h2>Video Not Found</h2>;
  }
  return (
    <div className="SingleVideo">
      <VideoPlayer url={video.src} />
      <div className="SingleVideoDesription">
        <div className="LeftDesription">
          <img src="https://picsum.photos/40/40" alt="userProfile" />
          <div>{video.title}</div>
        </div>
        <div className="RightDesription">
          {video.isWatchLater ? (
            <MdWatchLater
              className="VideoIcon"
              onClick={() => {
                dispatch({
                  type: ActionTypes.SET_VIDEO_WATCHED,
                  payload: { videoId: video._id },
                });
              }}
            />
          ) : (
            <MdOutlineWatchLater
              className="VideoIcon"
              onClick={() => {
                dispatch({
                  type: ActionTypes.SET_VIDEO_WATCHED,
                  payload: { videoId: video._id },
                });
              }}
            />
          )}
          <div className="AddToPlaylistIcon">
            <RiPlayListAddFill
              className="VideoIcon"
              onClick={() => {
                setToggleAddToPlaylistModal(!toggleAddToPlaylistModal);
              }}
            />
            <AddToPlaylistModal />
          </div>
          <div className="AddNoteIcon">
            <MdEditNote
              className="VideoIcon"
              onClick={() => {
                setToggleAddNoteModal(!toggleAddNoteModal);
              }}
            />
            <AddNote />
          </div>
        </div>
      </div>
      <h1>My Notes</h1>
      <div className="NoteList">
        {sortedNotes.map((note) => {
          return <div>{note}</div>;
        })}
      </div>
    </div>
  );
}
