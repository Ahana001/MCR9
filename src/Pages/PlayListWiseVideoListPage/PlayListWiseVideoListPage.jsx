import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import { VideoList } from "../../Components/VideoList/VideoList";
import { UIStructure } from "../../Components/UIStructure/UIStructure";

export function PlayListWiseVideoListPage() {
  const { state } = useContext(DataContext);
  const { playlistId } = useParams();

  const filterPlaylistWiseVideos = state?.videos?.filter((video) => {
    if (video.playlistIds.includes(playlistId)) {
      return true;
    } else {
      return false;
    }
  });
  const filterPlaylist = state?.playlists?.find(
    (playlist) => playlist._id === playlistId
  );
  return (
    <UIStructure>
      <VideoList
        list={filterPlaylistWiseVideos}
        listHeader={filterPlaylist?.name}
      />
    </UIStructure>
  );
}
