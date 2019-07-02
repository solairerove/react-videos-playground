import PropTypes from 'prop-types';
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => (
    <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
  ));

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.shape({
        videoId: PropTypes.string,
      }),
      snippet: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoList;
