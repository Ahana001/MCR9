import "./VideoList.css";

import { VideoCard } from "../VideoCard/VideoCard";
import { VideoCardShimmer } from "../VideoCardShimmer/VideoCardShimmer";

export function VideoList({ listHeader, list }) {
  if (list.length === 0) {
    return <VideoCardShimmer />;
  }
  return (
    <div className="VideoList">
      <h2>{listHeader}</h2>
      <div className="VideoListConatiner">
        {list.map((video) => {
          return <VideoCard key={video._id} video={video} />;
        })}
      </div>
    </div>
  );
}
