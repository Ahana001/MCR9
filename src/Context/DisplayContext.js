import { createContext, useState } from "react";

export const DisplayContext = createContext();

export function DisplayContextProvider({ children }) {
  const [toggleCreatePlaylistModal, setToggleCreatePlaylistModal] =
    useState(false);

  const [toggleAddToPlaylistModal, setToggleAddToPlaylistModal] =
    useState(false);

  const [toggleAddNoteModal, setToggleAddNoteModal] = useState(false);

  return (
    <DisplayContext.Provider
      value={{
        toggleCreatePlaylistModal,
        setToggleCreatePlaylistModal,
        toggleAddToPlaylistModal,
        setToggleAddToPlaylistModal,
        toggleAddNoteModal,
        setToggleAddNoteModal,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
