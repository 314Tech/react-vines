import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({videos, onSelectedVideo}) => {

  const videoCards = videos.map((video, index) => {
    return (
      <VideoCard
        video={video}
        onSelectedVideo={onSelectedVideo}
        key={index}
      />
    );
  });

  return (
    <ul className='col-md-4 list-group'>
      {videoCards}
    </ul>
  );
}

export default VideoList;