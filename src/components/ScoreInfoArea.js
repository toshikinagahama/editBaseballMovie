import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
        mainWidth = this.width;
        mainHeight = this.height;
        let ratioWidth = width / mainWidth;
        //攻撃がどちらかを示す印画像
        let attackImg = new Image();
        attackImg.onload = function () {
          let tmpTop = ((mainHeight / 100) * area['attack'].top_per - this.height / 2) * ratioWidth;
          let tmpLeft = ((mainWidth / 100) * area['attack'].left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          attackCurrent.style.top = tmpTop + 'px';
          attackCurrent.style.left = tmpLeft + 'px';
          attackCurrent.style.width = tmpWidth + 'px';

          attackCurrent.src = attackImg.src;
        };
        attackImg.src = area['attack'].src;
        //チーム名画像
        let name1Img = new Image();
        name1Img.onload = function () {
          let tmpTop = ((mainHeight / 100) * area['name1'].top_per - this.height / 2) * ratioWidth;
          let tmpLeft = ((mainWidth / 100) * area['name1'].left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          name1Current.style.top = tmpTop + 'px';
          name1Current.style.left = tmpLeft + 'px';
          name1Current.style.width = tmpWidth + 'px';

          name1Current.src = name1Img.src;
        };
        name1Img.src = area['name1'].src;
        let name2Img = new Image();
        name2Img.onload = function () {
          let tmpTop = ((mainHeight / 100) * area['name2'].top_per - this.height / 2) * ratioWidth;
          let tmpLeft = ((mainWidth / 100) * area['name2'].left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          name2Current.style.top = tmpTop + 'px';
          name2Current.style.left = tmpLeft + 'px';
          name2Current.style.width = tmpWidth + 'px';

          name2Current.src = name2Img.src;
        };
        name2Img.src = area['name2'].src;
        //チーム名画像
        let score1Img = new Image();
        score1Img.onload = function () {
          let tmpTop = ((mainHeight / 100) * area['score1'].top_per - this.height / 2) * ratioWidth;
          let tmpLeft = ((mainWidth / 100) * area['score1'].left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          score1Current.style.top = tmpTop + 'px';
          score1Current.style.left = tmpLeft + 'px';
          score1Current.style.width = tmpWidth + 'px';

          score1Current.src = score1Img.src;
        };
        score1Img.src = area['score1'].src;
        let score2Img = new Image();
        score2Img.onload = function () {
          let tmpTop = ((mainHeight / 100) * area['score2'].top_per - this.height / 2) * ratioWidth;
          let tmpLeft = ((mainWidth / 100) * area['score2'].left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          score2Current.style.top = tmpTop + 'px';
          score2Current.style.left = tmpLeft + 'px';
          score2Current.style.width = tmpWidth + 'px';

          score2Current.src = score2Img.src;
        };
        score2Img.src = area['score2'].src;
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
