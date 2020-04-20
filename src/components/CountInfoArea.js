import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CountInfoArea() {
  const dispatch = useDispatch();
  let display = useSelector((state) => state.display);
  let area = display.countInfoArea;
  let top = area.top_abs; //
  let left = area.left_abs; //
  let width = area.width_abs; //
  let height = area.height_abs; //
  let parentRef = React.createRef();
  let mainRef = React.createRef();
  let strikeRef = React.createRef();
  let ballRef = React.createRef();
  let outRef = React.createRef();

  let mouseTarget;
  let buttonCode = -1;
  //画像のサイズ
  let mainWidth;
  let mainHeight;

  React.useEffect(() => {
    {
      //メイン画像
      let mainCurrent = mainRef.current;
      let strikeCurrent = strikeRef.current;
      let ballCurrent = ballRef.current;
      let outCurrent = outRef.current;

      let mainImg = new Image();
      mainImg.onload = function () {
        mainWidth = this.width;
        mainHeight = this.height;
        let ratioWidth = width / mainWidth;
        // console.log(ratioWidth);
        //ストライク画像
        let strikeImg = new Image();
        strikeImg.onload = function () {
          let tmpTop = ((mainHeight / 100) * area['strike'].top_per - this.height / 2) * ratioWidth;
          let tmpLeft = ((mainWidth / 100) * area['strike'].left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          strikeCurrent.style.top = tmpTop + 'px';
          strikeCurrent.style.left = tmpLeft + 'px';
          strikeCurrent.style.width = tmpWidth + 'px';

          strikeCurrent.src = strikeImg.src;
        };
        strikeImg.src = area['strike'].src;
        //ボール画像
        let ballImg = new Image();
        ballImg.onload = function () {
          let tmpTop = ((mainHeight / 100) * area['ball'].top_per - this.height / 2) * ratioWidth;
          let tmpLeft = ((mainWidth / 100) * area['ball'].left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          ballCurrent.style.top = tmpTop + 'px';
          ballCurrent.style.left = tmpLeft + 'px';
          ballCurrent.style.width = tmpWidth + 'px';

          ballCurrent.src = ballImg.src;
        };
        ballImg.src = area['ball'].src;
        //アウト画像
        let outImg = new Image();
        outImg.onload = function () {
          let tmpTop = ((mainHeight / 100) * area['out'].top_per - this.height / 2) * ratioWidth;
          let tmpLeft = ((mainWidth / 100) * area['out'].left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          outCurrent.style.top = tmpTop + 'px';
          outCurrent.style.left = tmpLeft + 'px';
          outCurrent.style.width = tmpWidth + 'px';

          outCurrent.src = outImg.src;
        };
        outImg.src = area['out'].src;
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
    >
      <img
        ref={mainRef}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={strikeRef}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={ballRef}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={outRef}
        style={{
          position: 'absolute',
        }}
      ></img>
    </div>
  );
}

export default CountInfoArea;
