import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {

  const onReady = event => {
    // Hide controls
    event.target.setOption('controls', 0);
  };

  const onEnd = event => {
    // Restart the video when it ends
    event.target.playVideo();
  };

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0, // Ensure controls are hidden
      modestbranding: 1, // Hide YouTube logo
      showinfo: 0, // Hide video title and player actions
      fs: 0, // Hide fullscreen button
      rel: 0, // Do not show related videos at the end
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} onEnd={onEnd} />;
};

export default YouTubePlayer;