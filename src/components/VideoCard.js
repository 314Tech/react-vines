import React from 'react';

const VideoCard = ({video, onSelectedVideo}) => {


  const imageUrl = video.snippet.thumbnails.default.url;
  console.log(video);
  return (
    <li 
      className='list-group-item'
      onClick={() => onSelectedVideo(video)}
    > 
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageUrl} />
        </div>
        <div className='media-body'>
          <div className='media-heading'> 
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;