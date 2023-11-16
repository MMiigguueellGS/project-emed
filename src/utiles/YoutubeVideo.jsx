import React from 'react'

const YoutubeVideo = ({ videoUrl  }) => {

  const extractVideoId = (url) => {
    const match = url.match(/[?&]v=([^?&]+)/);
    return match ? match[1] : null;
  };
  const videoId = extractVideoId(videoUrl);

  if (!videoId) {
    return <div>Error: Invalid YouTube URL</div>;
  }
  return (
    <div className="video-responsive">
    <iframe
      width="680"
      height="385"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  )
}

export default YoutubeVideo