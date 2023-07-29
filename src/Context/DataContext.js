import { createContext, useEffect, useReducer } from "react";
import { ActionTypes, DataReducer, initialState } from "../Reducer/DataReducer";
import { categories } from "../Data/categories";
import { videos } from "../Data/videos";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    const localStorageVideos = localStorage.getItem("videos");
    const localStoragePlaylists = localStorage.getItem("playlists");

    if (!localStorageVideos) {
      const formattedVideos = videos?.map((video) => ({
        ...video,
        isWatchLater: false,
        playlistIds: [],
        notes: [],
      }));
      dispatch({
        type: ActionTypes.INITIAL_SET_VIDEOS,
        payload: {
          videos: formattedVideos,
        },
      });
      localStorage.setItem("videos", JSON.stringify(formattedVideos));
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_VIDEOS,
        payload: { videos: JSON.parse(localStorageVideos) },
      });
    }

    if (!localStoragePlaylists) {
      dispatch({
        type: ActionTypes.INITIAL_SET_PLAYLISTS,
        payload: {
          playlist: [],
        },
      });
      localStorage.setItem("playlists", JSON.stringify([]));
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_PLAYLISTS,
        payload: { playlists: JSON.parse(localStoragePlaylists) },
      });
    }

    dispatch({
      type: ActionTypes.INITIAL_SET_CATEGORIES,
      payload: { categories: categories },
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
