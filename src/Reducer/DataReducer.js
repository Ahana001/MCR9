import { v4 as uuid } from "uuid";

export const ActionTypes = {
  INITIAL_SET_CATEGORIES: "INITIAL_SET_CATEGORIES",
  INITIAL_SET_VIDEOS: "INITIAL_SET_VIDEOS",
  INITIAL_SET_PLAYLISTS: "INITIAL_SET_PLAYLISTS",
  INITIAL_LOCAL_STORAGE_FETCH: "INITIAL_LOCAL_STORAGE_FETCH",
  SET_VIDEO_WATCHED: "SET_VIDEO_WATCHED",
  CREATE_PLAYLIST: "CREATE_PLAYLIST",
  DELETE_PLAYLIST: "DELETE_PLAYLIST",
  ADD_TO_PLAYLIST: "ADD_TO_PLAYLIST",
  REMOVE_FROM_PLAYLIST: "REMOVE_FROM_PLAYLIST",
  SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
};

export const initialState = {
  categories: [],
  videos: [],
  playlists: [],
  search: "",
};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INITIAL_SET_CATEGORIES: {
      result = {
        ...state,
        categories: action.payload.categories,
      };

      break;
    }
    case ActionTypes.INITIAL_SET_VIDEOS: {
      result = {
        ...state,
        videos: action.payload.videos,
      };
      break;
    }
    case ActionTypes.INITIAL_SET_PLAYLISTS: {
      result = {
        ...state,
        playlists: action.payload.playlists,
      };
      break;
    }
    case ActionTypes.SET_VIDEO_WATCHED: {
      const videos = state.videos.map((video) => {
        if (video._id === action.payload?.videoId) {
          return {
            ...video,
            isWatchLater: !video.isWatchLater,
          };
        } else {
          return video;
        }
      });
      result = {
        ...state,
        videos: videos,
      };
      localStorage.setItem("videos", JSON.stringify(videos));
      break;
    }
    case ActionTypes.CREATE_PLAYLIST: {
      const playlists = [
        ...state.playlists,
        {
          ...action.payload.playlist,
          _id: uuid(),
          thumbnail: "https://picsum.photos/300/176",
          createdAt: new Date(),
        },
      ];
      result = {
        ...state,
        playlists: playlists,
      };
      localStorage.setItem("playlists", JSON.stringify(playlists));
      break;
    }
    case ActionTypes.DELETE_PLAYLIST: {
      const playlists = state.playlists.filter(
        (playlist) => playlist._id !== action.payload.playlistId
      );
      const videos = state.videos.map((video) => {
        if (video.playlistIds.includes(action.payload.playlistId)) {
          return {
            ...video,
            playlistIds: video.playlistIds.filter(
              (playlistId) => playlistId !== action.payload.playlistId
            ),
          };
        }
        return video;
      });
      result = {
        ...state,
        videos: videos,
        playlists: playlists,
      };
      localStorage.setItem("videos", JSON.stringify(videos));
      localStorage.setItem("playlists", JSON.stringify(playlists));
      break;
    }
    case ActionTypes.ADD_TO_PLAYLIST: {
      const videos = state.videos.map((video) => {
        if (video._id === Number(action.payload.videoId)) {
          return {
            ...video,
            playlistIds: [...video.playlistIds, action.payload.playlistId],
          };
        }
        return video;
      });
      result = {
        ...state,
        videos: videos,
      };
      localStorage.setItem("videos", JSON.stringify(videos));
      break;
    }
    case ActionTypes.REMOVE_FROM_PLAYLIST: {
      const videos = state.videos.map((video) => {
        if (video._id === Number(action.payload.videoId)) {
          return {
            ...video,
            playlistIds: video.playlistIds.filter(
              (playlistId) => playlistId !== action.payload.playlistId
            ),
          };
        }
        return video;
      });
      result = {
        ...state,
        videos: videos,
      };
      localStorage.setItem("videos", JSON.stringify(videos));
      break;
    }
    case ActionTypes.SET_SEARCH_TEXT: {
      result = {
        ...state,
        search: action.payload.search,
      };
      break;
    }
  }
  return result;
}
