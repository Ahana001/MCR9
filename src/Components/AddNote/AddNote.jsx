import "./AddNote.css";

import { useContext, useState } from "react";
import { ActionTypes } from "../../Reducer/DataReducer";
import { DataContext } from "../../Context/DataContext";
import { DisplayContext } from "../../Context/DisplayContext";
import { useParams } from "react-router-dom";

export function AddNote() {
  const { videoId } = useParams();

  const { dispatch } = useContext(DataContext);
  const { toggleAddNoteModal, setToggleAddNoteModal } =
    useContext(DisplayContext);
  const [noteForm, setNoteForm] = useState({ note: "" });

  return (
    <div
      className="AddNote"
      style={{
        display: toggleAddNoteModal ? "flex" : "none",
      }}
    >
      <input
        type="text"
        placeholder="Add New Note"
        value={noteForm.note}
        onChange={(e) => {
          setNoteForm(() => ({
            ...noteForm,
            note: e.target.value,
          }));
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: ActionTypes.ADD_NOTE,
            payload: { note: noteForm, videoId: videoId },
          });
          setNoteForm({ note: "" });
          setToggleAddNoteModal(false);
        }}
        disabled={noteForm.note === ""}
      >
        Add New Note
      </button>
    </div>
  );
}
