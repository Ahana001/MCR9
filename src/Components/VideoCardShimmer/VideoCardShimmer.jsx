import ContentLoader from "react-content-loader";

export function VideoCardShimmer() {
  return (
    <>
      {[1000, 2000, 3000, 4000, 5000, 6000].map((key) => {
        return (
          <ContentLoader
            key={key}
            speed={2}
            width={400}
            height={300}
            viewBox="0 0 400 300"
            backgroundColor="#f0f0f0"
            foregroundColor="#ecebeb"
          >
            <rect x="100" y="20" rx="4" ry="4" width="300" height="10" />
            <rect x="100" y="40" rx="4" ry="4" width="300" height="200" />
            <circle cx="120" cy="270" r="20" />
            <rect x="180" y="250" rx="4" ry="4" width="150" height="10" />
            <rect x="180" y="270" rx="4" ry="4" width="200" height="10" />
          </ContentLoader>
        );
      })}
    </>
  );
}
