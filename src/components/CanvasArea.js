import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CanvasArea() {
  const dispatch = useDispatch();
  let player = useSelector(state => state.player);
  let activeImage = useSelector(state => state.activeImage);
  let srcList = [];
  let move_start_x = 0;
  let move_start_y = 0;
  let moveFlg = false;
  let top = 0;
  let left = 0;
  let target = document;
  let buttonCode = -1;

  let mousemove = function (event) {
    if (buttonCode === 0) {
      event.target.style.left = parseInt(event.target.style.left) + event.movementX + 'px';
      event.target.style.top = parseInt(event.target.style.top) + event.movementY + 'px';
    } else if (buttonCode === 1) {
      console.log(event.target.width);
      console.log(event.movementY);
      event.target.width = parseInt(event.target.width) + parseInt(event.movementY);
      console.log(event.target.width);
    }

  }
  let mouseup = function (event) {
    target.removeEventListener('mousemove', mousemove);
    target.removeEventListener('mouseup', mouseup);
  }


  let mousedown = function (event) {
    buttonCode = event.button;
    event.preventDefault();
    target.addEventListener('mousemove', mousemove)
    target.addEventListener('mouseup', mouseup)
  }

  React.useEffect(() => {
    // setInterval(() => {
    //   srcList.push(runner_123);
    //   console.log(srcList);
    // }, 1000);
  }, []);

  return (
    <div style={{ position: 'absolute' }}>
      {activeImage.map((val, index) => {
        return <img src={val.src} style={{ position: 'absolute', top: top, left: left }} onMouseDown={e => mousedown(e)}></img>
      })
      }
    </div>
  );
}

export default CanvasArea;
