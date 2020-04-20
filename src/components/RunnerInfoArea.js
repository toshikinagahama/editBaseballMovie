import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { runnerInfoAreaChange } from '../actions';

function RunnerInfoArea() {
  const dispatch = useDispatch();
  let display = useSelector((state) => state.display);
  let area = display.runnerInfoArea;
  let top = area.top_abs; //
  let left = area.left_abs; //
  let width = area.width_abs; //
  let height = area.height_abs; //
  let parentRef = React.createRef();
  let mainRef = React.createRef();
  let runnerRef = React.createRef();
  let inningRef = React.createRef();

  let mouseTarget;
  let buttonCode = -1;
  //画像のサイズ
  let mainWidth;
  let mainHeight;

  let mousemove = function (event) {
    // console.log(mouseTarget);
    if (buttonCode === 0) {
      mouseTarget.style.left = parseInt(mouseTarget.style.left) + event.movementX + 'px';
      mouseTarget.style.top = parseInt(mouseTarget.style.top) + event.movementY + 'px';
    } else if (buttonCode === 1) {
      //後でdispatchする。
      width = parseInt(mouseTarget.style.width);
      height = parseInt(mouseTarget.style.height);
      console.log(width);
      if (width <= 10) {
        if (parseInt(event.movementX) < 0) return;
      }
      let mainCurrent = mainRef.current;
      let runnerCurrent = runnerRef.current;
      let inningCurrent = inningRef.current;
      if (mainCurrent === null) return;
      if (runnerCurrent === null) return;
      if (inningCurrent === null) return;
      mouseTarget.style.width = width + parseInt(event.movementX) + 'px';
      let ratioWidth = width / mainCurrent.width;
      {
        let tmpTop =
          ((mainCurrent.height / 100) * area['runner'].top_per - runnerCurrent.height / 2) *
          ratioWidth;
        let tmpLeft =
          ((mainCurrent.width / 100) * area['runner'].left_per - runnerCurrent.width / 2) *
          ratioWidth;
        let tmpWidth = (runnerCurrent.width / mainCurrent.width) * width;
        runnerCurrent.style.top = tmpTop + 'px';
        runnerCurrent.style.left = tmpLeft + 'px';
        runnerCurrent.style.width = tmpWidth + 'px';
      }
      {
        let tmpTop =
          ((mainCurrent.height / 100) * area['inning'].top_per - inningCurrent.height / 2) *
          ratioWidth;
        let tmpLeft =
          ((mainCurrent.width / 100) * area['inning'].left_per - inningCurrent.width / 2) *
          ratioWidth;
        let tmpWidth = (inningCurrent.width / mainCurrent.width) * width;
        inningCurrent.style.top = tmpTop + 'px';
        inningCurrent.style.left = tmpLeft + 'px';
        inningCurrent.style.width = tmpWidth + 'px';
      }
      mainCurrent.style.width = width + 'px';
    }
  };
  let mouseup = function (event) {
    dispatch(
      runnerInfoAreaChange(
        parseInt(mouseTarget.style.top),
        parseInt(mouseTarget.style.left),
        parseInt(mouseTarget.style.width),
        parseInt(mouseTarget.style.height)
      )
    );

    mouseTarget = null;
    document.removeEventListener('mousemove', mousemove);
    document.removeEventListener('mouseup', mouseup);
  };

  let mousedown = function (event) {
    buttonCode = event.button;
    mouseTarget = parentRef.current;
    event.preventDefault();
    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', mouseup);
  };

  React.useEffect(() => {
    {
      //メイン画像
      let mainCurrent = mainRef.current;
      let runnerCurrent = runnerRef.current;
      let inningCurrent = inningRef.current;

      let mainImg = new Image();
      mainImg.onload = function () {
        mainWidth = this.width;
        mainHeight = this.height;
        let ratioWidth = width / mainWidth;
        //ランナー画像
        let runnerImg = new Image();
        runnerImg.onload = function () {
          let tmpTop = ((mainHeight / 100) * area['runner'].top_per - this.height / 2) * ratioWidth;
          let tmpLeft = ((mainWidth / 100) * area['runner'].left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          runnerCurrent.style.top = tmpTop + 'px';
          runnerCurrent.style.left = tmpLeft + 'px';
          runnerCurrent.style.width = tmpWidth + 'px';

          runnerCurrent.src = runnerImg.src;
        };
        runnerImg.src = area['runner'].src;
        //イニング画像

        let inningImg = new Image();
        inningImg.onload = function () {
          let tmpTop = ((mainHeight / 100) * area['inning'].top_per - this.height / 2) * ratioWidth;
          let tmpLeft = ((mainWidth / 100) * area['inning'].left_per - this.width / 2) * ratioWidth;

          let tmpWidth = this.width * ratioWidth;
          inningCurrent.style.top = tmpTop + 'px';
          inningCurrent.style.left = tmpLeft + 'px';
          inningCurrent.style.width = tmpWidth + 'px';

          inningCurrent.src = inningImg.src;
        };
        inningImg.src = area['inning'].src;
        //メインのトップ、レフトは0,0で固定
        //メインのサイズはこのエリアの要素の幅に合わせる。
        mainCurrent.style.width = width + 'px';
        //高さは自動にする。
        // mainCurrent.style.height = height + 'px';
        mainCurrent.src = mainImg.src;
      };
      mainImg.src = area['main'].src;
    }
  });

  return (
    <div
      ref={parentRef}
      style={{
        position: 'absolute',
        top: top,
        left: left,
        width: width,
        height: height,
      }}
      onMouseDown={(e) => mousedown(e)}
    >
      <img
        ref={mainRef}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={runnerRef}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={inningRef}
        style={{
          position: 'absolute',
        }}
      ></img>
    </div>
  );
}

export default RunnerInfoArea;
