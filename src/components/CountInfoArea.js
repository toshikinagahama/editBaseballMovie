import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChildImageInfo } from '../utils/func';

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
        let src;
        let top_per;
        let left_per;
        let r = width / this.width;
        let w0 = this.width * r;
        let h0 = this.height * r;
        //strike
        src = area['strike'].src;
        top_per = area['strike'].top_per;
        left_per = area['strike'].left_per;
        getChildImageInfo(w0, h0, r, src, top_per, left_per, strikeCurrent);
        //ball
        src = area['ball'].src;
        top_per = area['ball'].top_per;
        left_per = area['ball'].left_per;
        getChildImageInfo(w0, h0, r, src, top_per, left_per, ballCurrent);
        //out
        src = area['out'].src;
        top_per = area['out'].top_per;
        left_per = area['out'].left_per;
        getChildImageInfo(w0, h0, r, src, top_per, left_per, outCurrent);
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
