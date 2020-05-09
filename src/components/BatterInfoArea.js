import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChildImageInfo } from '../utils/func';

function BatterInfoArea() {
  const dispatch = useDispatch();
  let display = useSelector((state) => state.display);
  let area = display.batterInfoArea;
  let top = area.top_abs; //
  let left = area.left_abs; //
  let width = area.width_abs; //
  let height = area.height_abs; //
  let parentRef = React.createRef();
  let mainRef = React.createRef();
  let nameRef = React.createRef();
  let commentRef = React.createRef();
  let resultRefs = [];
  let rbiRefs = [];
  for (let i = 0; i < 7; i++) {
    resultRefs.push(React.createRef());
    rbiRefs.push(React.createRef());
  }

  let mouseTarget;
  let buttonCode = -1;
  //画像のサイズ
  let mainWidth;
  let mainHeight;

  React.useEffect(() => {
    {
      //メイン画像
      let mainCurrent = mainRef.current;
      let nameCurrent = nameRef.current;
      let commentCurrent = commentRef.current;
      let resultCurrents = [];
      let rbiCurrents = [];
      for (let i = 0; i < 7; i++) {
        resultCurrents.push(resultRefs[i].current);
        rbiCurrents.push(rbiRefs[i].current);
      }
      let mainImg = new Image();
      mainImg.onload = function () {
        let src;
        let top_per;
        let left_per;
        let r = width / this.width;
        let w0 = this.width * r;
        let h0 = this.height * r;
        //バッター名
        src = area['name'].src;
        top_per = area['name'].top_per;
        left_per = area['name'].left_per;
        getChildImageInfo(w0, h0, r, src, top_per, left_per, nameCurrent);
        //バッター名
        src = area['comment'].src;
        top_per = area['comment'].top_per;
        left_per = area['comment'].left_per;
        getChildImageInfo(w0, h0, r, src, top_per, left_per, commentCurrent);
        //打席結果画像
        for (let i = 0; i < 7; i++) {
          src = area['results'][i].result.src;
          top_per = area['results'][i].result.top_per;
          left_per = area['results'][i].result.left_per;
          getChildImageInfo(w0, h0, r, src, top_per, left_per, resultCurrents[i]);
        }
        for (let i = 0; i < 7; i++) {
          src = area['results'][i].rbi.src;
          top_per = area['results'][i].rbi.top_per;
          left_per = area['results'][i].rbi.left_per;
          getChildImageInfo(w0, h0, r, src, top_per, left_per, rbiCurrents[i]);
        }

        for (let i = 0; i < 7; i++) {
          if (area['results'][i].result.src == '') {
            resultCurrents[i].src = '';
          }
          if (area['results'][i].rbi.src == '') {
            rbiCurrents[i].src = '';
          }
        }
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
        ref={nameRef}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={commentRef}
        style={{
          position: 'absolute',
        }}
      ></img>
      {resultRefs.map((ref) => {
        return (
          <img
            ref={ref}
            style={{
              position: 'absolute',
            }}
          ></img>
        );
      })}
      {rbiRefs.map((ref) => {
        return (
          <img
            ref={ref}
            style={{
              position: 'absolute',
            }}
          ></img>
        );
      })}
    </div>
  );
}

export default BatterInfoArea;
