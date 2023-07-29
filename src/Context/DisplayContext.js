import { createContext, useState } from "react";

export const DisplayContext = createContext();

export function DisplayContextProvider({ children }) {
  const [toggleCreatePlaylistModal, setToggleCreatePlaylistModal] =
    useState(false);

  const [toggleAddToPlaylistModal, setToggleAddToPlaylistModal] =
    useState(false);

  return (
    <DisplayContext.Provider
      value={{
        toggleCreatePlaylistModal,
        setToggleCreatePlaylistModal,
        toggleAddToPlaylistModal,
        setToggleAddToPlaylistModal,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
