import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CanvasArea() {
  const dispatch = useDispatch();
  let canvasRef = React.createRef();
  let parentRef = React.createRef();

  React.useEffect(() => {
    let canvas = canvasRef.current;
    let parent = parentRef.current;
    canvas.style.position = 'absolute';

    let ctx = canvas.getContext('2d');
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255,0,255,0.1)';
    ctx.fillRect(0, 0, parent.offsetWidth, parent.offsetHeight);
    ctx.save();

    const onKeyDown = e => {
      switch (e.keyCode) {
        case 32:
          break;
        default:
          break;
      }
    };
    canvasRef.current.addEventListener('keydown', onKeyDown);
  });

  return (
    <div
      ref={parentRef}
      style={{ position: 'absolute', overflow: 'hidden', height: '100%', width: '100%' }}
    >
      <canvas style={{ height: '200px', width: '0px' }} ref={canvasRef}></canvas>
    </div>
  );
}

export default CanvasArea;
