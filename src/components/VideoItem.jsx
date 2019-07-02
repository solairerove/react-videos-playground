import PropTypes from 'prop-types';
import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => (
  <div role="presentation" onClick={() => onVideoSelect(video)} className="video-item item">
    <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />

    <div className="content">
      <div className="header">{video.snippet.title}</div>
    </div>
  </div>
);

VideoItem.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string,
    }),
    snippet: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      thumbnails: PropTypes.shape({
        medium: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoItem;
