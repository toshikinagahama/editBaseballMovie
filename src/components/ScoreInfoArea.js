import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChildImageInfo } from '../utils/func';

function ScoreInfoArea() {
  const dispatch = useDispatch();
  let display = useSelector((state) => state.display);
  let area = display.scoreInfoArea;
  let top = area.top_abs; //
  let left = area.left_abs; //
  let width = area.width_abs; //
  let height = area.height_abs; //
  let parentRef = React.createRef();
  let mainRef = React.createRef();
  let attackRef = React.createRef();
  let name1Ref = React.createRef();
  let name2Ref = React.createRef();
  let score1Ref = React.createRef();
  let score2Ref = React.createRef();

  let mouseTarget;
  let buttonCode = -1;
  //画像のサイズ
  let mainWidth;
  let mainHeight;

  let mousedown = function (event) {
    buttonCode = event.button;
    mouseTarget = parentRef.current;
    event.preventDefault();
  };

  React.useEffect(() => {
    {
      //メイン画像
      let mainCurrent = mainRef.current;
      let attackCurrent = attackRef.current;
      let name1Current = name1Ref.current;
      let name2Current = name2Ref.current;
      let score1Current = score1Ref.current;
      let score2Current = score2Ref.current;

      let mainImg = new Image();
      mainImg.onload = function () {
        let src;
        let top_per;
        let left_per;
        let r = width / this.width;
        let w0 = this.width * r;
        let h0 = this.height * r;
        //攻撃側印
        src = area['attack'].src;
        top_per = area['attack'].top_per;
        left_per = area['attack'].left_per;
        getChildImageInfo(w0, h0, r, src, top_per, left_per, attackCurrent);
        //チーム1名
        src = area['name1'].src;
        top_per = area['name1'].top_per;
        left_per = area['name1'].left_per;
        getChildImageInfo(w0, h0, r, src, top_per, left_per, name1Current);
        //チーム2名
        src = area['name2'].src;
        top_per = area['name2'].top_per;
        left_per = area['name2'].left_per;
        getChildImageInfo(w0, h0, r, src, top_per, left_per, name2Current);
        //チーム1スコア
        src = area['score1'].src;
        top_per = area['score1'].top_per;
        left_per = area['score1'].left_per;
        getChildImageInfo(w0, h0, r, src, top_per, left_per, score1Current);
        //チーム2スコア
        src = area['score2'].src;
        top_per = area['score2'].top_per;
        left_per = area['score2'].left_per;
        getChildImageInfo(w0, h0, r, src, top_per, left_per, score2Current);

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
        ref={attackRef}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={name1Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={name2Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={score1Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={score2Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
    </div>
  );
}

export default ScoreInfoArea;
