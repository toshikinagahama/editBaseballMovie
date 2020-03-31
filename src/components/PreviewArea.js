import React from 'react';
import { video_oprationAction, video_currentTimeChange } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import CanvasArea from "./CanvasArea"
import runner_123 from "../images/ランナー満塁.png";

function PreviewArea() {
  const dispatch = useDispatch();
  let playerRef = React.createRef();
  let parentRef = React.createRef();
  let canvasRef = React.createRef();
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
    let canvas = canvasRef.current;

    dispatch(video_oprationAction(player));

    player.onloadedmetadata = e => {
      parent.style.width = parent.offsetWidth + 'px';
      parent.style.height = parent.offsetHeight + 'px';
      player.style.width = parent.offsetWidth + 'px';
      player.style.height =
        Math.round((parseInt(player.style.width) * player.videoHeight) / player.videoWidth) + 'px';
      player.style.position = 'absolute';
      parent.style.height = player.style.height;
      canvas.width = parseInt(player.style.width);
      canvas.height = parseInt(player.style.height);
      canvas.style.width = player.style.width;
      canvas.style.height = player.style.height;
      canvas.focus();
    }


    canvas.onkeydown = e => {
      e.preventDefault();
      let keycode;
      let ctrl;
      let shift;

      // Mozilla(Firefox, NN) and Opera 
      if (e != null) {
        keycode = e.which;
        ctrl = typeof e.modifiers == 'undefined' ? e.ctrlKey : e.modifiers & Event.CONTROL_MASK;
        shift = typeof e.modifiers == 'undefined' ? e.shiftKey : e.modifiers & Event.SHIFT_MASK;
        // イベントの上位伝播を防止 
        e.preventDefault();
        e.stopPropagation();
        // Internet Explorer 
      } else {
        keycode = e.keyCode;
        ctrl = e.ctrlKey;
        shift = e.shiftKey;
        // イベントの上位伝播を防止 
        e.returnValue = false;
        e.cancelBubble = true;
      }

      // キーコードの文字を取得 
      let keychar = String.fromCharCode(keycode).toUpperCase();

      // Ctrl同時押しの場合 
      if (ctrl) {

      } else if (shift) { // Shift同時押しの場合
        if (keycode == 32) {	//スペースの場合
          if (!player.paused)
            player.pause();
          else
            player.play();
        }

        if (keycode == 37) {
          player.currentTime -= 1.0 / 30.0;
          dispatch(video_currentTimeChange(player.currentTime));
        } else if (keycode == 39) {
          player.currentTime += 1.0 / 30.0;
          dispatch(video_currentTimeChange(player.currentTime));
        } else if (keycode == 38) {
          player.volume += 0.02;
        } else if (keycode == 40) {
          player.volume -= 0.02;
        }



        if (keychar == "V") {
          // writeTime();
        } else if (keychar == "1") {
          player.playbackRate = 1;
        } else if (keychar == "2") {
          player.playbackRate = 2;
        } else if (keychar == "3") {
          player.playbackRate = 4;
        } else if (keychar == "4") {
          player.playbackRate = 10;
        } else if (keychar == "5") {
          player.playbackRate = 15;
        }
      } else {	// 通常のキーダウン時の場合 
        if (keycode == 37) {
          player.currentTime -= 1.0;
          dispatch(video_currentTimeChange(player.currentTime));
        } else if (keycode == 39) {
          player.currentTime += 1.0;
          dispatch(video_currentTimeChange(player.currentTime));
        }
      }

    }

    canvas.onkeypress = e => {
      e.preventDefault();
    }

    canvas.onkeyup = e => {
      console.log(e);
      e.preventDefault();
    }

    player.onplay = e => {
      timer = setInterval(function () {
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
      <video width={'100%'} ref={playerRef} src={src} muted
        style={{ position: 'absolute' }}
      ></video>
      <canvas width={'100%'} ref={canvasRef}
        style={{ position: 'absolute' }}
        tabindex="1"
      ></canvas>
      <CanvasArea />
    </div>
  );
}

export default PreviewArea;
