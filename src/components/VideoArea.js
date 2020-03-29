import React from 'react';
import { video_oprationAction, video_currentTimeChange } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

function VideoArea() {
  const dispatch = useDispatch();
  let playerRef = React.createRef();
  let parentRef = React.createRef();
  let player = useSelector(state => state.player);
  let src = useSelector(state => state.src);
  let timer = null;

  let currentTime = useSelector(state => state.currentTime);
  if (currentTime !== null && player !== undefined && player.paused) {
    player.currentTime = currentTime;
  }

  React.useEffect(() => {
    let player = playerRef.current;
    let parent = parentRef.current;
    parent.style.width = parent.offsetWidth + 'px';
    parent.style.height = parent.offsetHeight + 'px';
    player.style.width = parent.offsetWidth + 'px';
    player.style.height =
      Math.round((parseInt(player.style.width) * player.videoHeight) / player.videoWidth) + 'px';
    player.style.position = 'absolute';

    dispatch(video_oprationAction(player));

    player.onplay = e => {
      timer = setInterval(function() {
        if (player.paused) {
          clearInterval(timer);
        }
        dispatch(video_currentTimeChange(player.currentTime));
      }, 500);
    };

    player.onpause = e => {
      console.log('pause');
      if (timer !== null) {
        clearInterval(timer);
      }
    };
  });

  return (
    <div
      ref={parentRef}
      style={{ position: 'relative', overflow: 'hidden', height: '100%', width: '100%' }}
    >
      <video width={'100%'} controls muted ref={playerRef} src={src}></video>
    </div>
  );
}

export default VideoArea;
