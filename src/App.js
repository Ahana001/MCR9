import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "./Pages/HomePage/HomePage";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { WatchLaterPage } from "./Pages/WatchLaterPage/WatchLaterPage";
import { CategoryWiseVideosPage } from "./Pages/CategoryWiseVideosPage/CategoryWiseVideosPage";
import { PlayListPage } from "./Pages/PlayListPage/PlayListPage";
import { SingleVideoPage } from "./Pages/SingleVideoPage/SingleVideoPage";
import { PlayListWiseVideoListPage } from "./Pages/PlayListWiseVideoListPage/PlayListWiseVideoListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/video/:videoId" element={<SingleVideoPage />}></Route>
        <Route
          path="/videos/:categoryName"
          element={<CategoryWiseVideosPage />}
        ></Route>
        <Route path="/explore" element={<HomePage />}></Route>
        <Route path="/playlists" element={<PlayListPage />}></Route>
        <Route
          path="/playlist/:playlistId"
          element={<PlayListWiseVideoListPage />}
        ></Route>
        <Route path="/watchLater" element={<WatchLaterPage />}></Route>
        <Route path="/404" element={<ErrorPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
