import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  let result1Ref = React.createRef();
  let result2Ref = React.createRef();
  let result3Ref = React.createRef();
  let result4Ref = React.createRef();
  let result5Ref = React.createRef();
  let result6Ref = React.createRef();
  let result7Ref = React.createRef();
  let rbi1Ref = React.createRef();
  let rbi2Ref = React.createRef();
  let rbi3Ref = React.createRef();
  let rbi4Ref = React.createRef();
  let rbi5Ref = React.createRef();
  let rbi6Ref = React.createRef();
  let rbi7Ref = React.createRef();

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
      let result1Current = result1Ref.current;
      let result2Current = result2Ref.current;
      let result3Current = result3Ref.current;
      let result4Current = result4Ref.current;
      let result5Current = result5Ref.current;
      let result6Current = result6Ref.current;
      let result7Current = result7Ref.current;
      let rbi1Current = rbi1Ref.current;
      let rbi2Current = rbi2Ref.current;
      let rbi3Current = rbi3Ref.current;
      let rbi4Current = rbi4Ref.current;
      let rbi5Current = rbi5Ref.current;
      let rbi6Current = rbi6Ref.current;
      let rbi7Current = rbi7Ref.current;
      console.log(area['results']);

      let mainImg = new Image();
      mainImg.onload = function () {
        mainWidth = this.width;
        mainHeight = this.height;
        let ratioWidth = width / mainWidth;
        //名前画像
        let nameImg = new Image();
        nameImg.onload = function () {
          let tmpTop = ((mainHeight / 100) * area['name'].top_per - this.height / 2) * ratioWidth;
          let tmpLeft = ((mainWidth / 100) * area['name'].left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          nameCurrent.style.top = tmpTop + 'px';
          nameCurrent.style.left = tmpLeft + 'px';
          nameCurrent.style.width = tmpWidth + 'px';

          nameCurrent.src = nameImg.src;
        };
        nameImg.src = area['name'].src;
        //打席結果画像
        let result1Img = new Image();
        result1Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][0].result.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][0].result.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          result1Current.style.top = tmpTop + 'px';
          result1Current.style.left = tmpLeft + 'px';
          result1Current.style.width = tmpWidth + 'px';
          result1Current.src = result1Img.src;
        };
        result1Img.src = area['results'][0].result.src;
        let result2Img = new Image();
        result2Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][1].result.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][1].result.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          result2Current.style.top = tmpTop + 'px';
          result2Current.style.left = tmpLeft + 'px';
          result2Current.style.width = tmpWidth + 'px';
          result2Current.src = result2Img.src;
        };
        result2Img.src = area['results'][1].result.src;
        let result3Img = new Image();
        result3Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][2].result.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][2].result.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          result3Current.style.top = tmpTop + 'px';
          result3Current.style.left = tmpLeft + 'px';
          result3Current.style.width = tmpWidth + 'px';

          result3Current.src = result3Img.src;
        };
        result3Img.src = area['results'][2].result.src;
        let result4Img = new Image();
        result4Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][3].result.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][3].result.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          result4Current.style.top = tmpTop + 'px';
          result4Current.style.left = tmpLeft + 'px';
          result4Current.style.width = tmpWidth + 'px';

          result4Current.src = result4Img.src;
        };
        result4Img.src = area['results'][3].result.src;
        let result5Img = new Image();
        result5Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][4].result.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][4].result.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          result5Current.style.top = tmpTop + 'px';
          result5Current.style.left = tmpLeft + 'px';
          result5Current.style.width = tmpWidth + 'px';

          result5Current.src = result5Img.src;
        };
        result5Img.src = area['results'][4].result.src;
        let result6Img = new Image();
        result6Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][5].result.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][5].result.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          result6Current.style.top = tmpTop + 'px';
          result6Current.style.left = tmpLeft + 'px';
          result6Current.style.width = tmpWidth + 'px';

          result6Current.src = result6Img.src;
        };
        result6Img.src = area['results'][5].result.src;
        let result7Img = new Image();
        result7Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][6].result.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][6].result.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          result7Current.style.top = tmpTop + 'px';
          result7Current.style.left = tmpLeft + 'px';
          result7Current.style.width = tmpWidth + 'px';

          result7Current.src = result7Img.src;
        };
        result7Img.src = area['results'][6].result.src;
        let rbi1Img = new Image();
        rbi1Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][0].rbi.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][0].rbi.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          rbi1Current.style.top = tmpTop + 'px';
          rbi1Current.style.left = tmpLeft + 'px';
          rbi1Current.style.width = tmpWidth + 'px';

          rbi1Current.src = rbi1Img.src;
        };
        rbi1Img.src = area['results'][0].rbi.src;
        let rbi2Img = new Image();
        rbi2Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][1].rbi.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][1].rbi.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          rbi2Current.style.top = tmpTop + 'px';
          rbi2Current.style.left = tmpLeft + 'px';
          rbi2Current.style.width = tmpWidth + 'px';

          rbi2Current.src = rbi2Img.src;
        };
        rbi2Img.src = area['results'][1].rbi.src;
        let rbi3Img = new Image();
        rbi3Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][2].rbi.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][2].rbi.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          rbi3Current.style.top = tmpTop + 'px';
          rbi3Current.style.left = tmpLeft + 'px';
          rbi3Current.style.width = tmpWidth + 'px';

          rbi3Current.src = rbi3Img.src;
        };
        rbi3Img.src = area['results'][2].rbi.src;
        let rbi4Img = new Image();
        rbi4Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][3].rbi.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][3].rbi.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          rbi4Current.style.top = tmpTop + 'px';
          rbi4Current.style.left = tmpLeft + 'px';
          rbi4Current.style.width = tmpWidth + 'px';

          rbi4Current.src = rbi4Img.src;
        };
        rbi4Img.src = area['results'][3].rbi.src;
        let rbi5Img = new Image();
        rbi5Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][4].rbi.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][4].rbi.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          rbi5Current.style.top = tmpTop + 'px';
          rbi5Current.style.left = tmpLeft + 'px';
          rbi5Current.style.width = tmpWidth + 'px';

          rbi5Current.src = rbi5Img.src;
        };
        rbi5Img.src = area['results'][4].rbi.src;
        let rbi6Img = new Image();
        rbi6Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][5].rbi.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][5].rbi.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          rbi6Current.style.top = tmpTop + 'px';
          rbi6Current.style.left = tmpLeft + 'px';
          rbi6Current.style.width = tmpWidth + 'px';

          rbi6Current.src = rbi6Img.src;
        };
        rbi6Img.src = area['results'][5].rbi.src;
        let rbi7Img = new Image();
        rbi7Img.onload = function () {
          let tmpTop =
            ((mainHeight / 100) * area['results'][6].rbi.top_per - this.height / 2) * ratioWidth;
          let tmpLeft =
            ((mainWidth / 100) * area['results'][6].rbi.left_per - this.width / 2) * ratioWidth;
          let tmpWidth = this.width * ratioWidth;
          rbi7Current.style.top = tmpTop + 'px';
          rbi7Current.style.left = tmpLeft + 'px';
          rbi7Current.style.width = tmpWidth + 'px';

          rbi7Current.src = rbi7Img.src;
        };
        rbi7Img.src = area['results'][6].rbi.src;
        console.log(result3Img.src);
        if (area['results'][0].result.src == '') {
          result1Current.src = '';
        }
        if (area['results'][1].result.src == '') {
          result2Current.src = '';
        }
        if (area['results'][2].result.src == '') {
          result3Current.src = '';
        }
        if (area['results'][3].result.src == '') {
          result4Current.src = '';
        }
        if (area['results'][4].result.src == '') {
          result5Current.src = '';
        }
        if (area['results'][5].result.src == '') {
          result6Current.src = '';
        }
        if (area['results'][6].result.src == '') {
          result7Current.src = '';
        }
        if (area['results'][0].rbi.src == '') {
          rbi1Current.src = '';
        }
        if (area['results'][1].rbi.src == '') {
          rbi2Current.src = '';
        }
        if (area['results'][2].rbi.src == '') {
          rbi3Current.src = '';
        }
        if (area['results'][3].rbi.src == '') {
          rbi4Current.src = '';
        }
        if (area['results'][4].rbi.src == '') {
          rbi5Current.src = '';
        }
        if (area['results'][5].rbi.src == '') {
          rbi6Current.src = '';
        }
        if (area['results'][6].rbi.src == '') {
          rbi7Current.src = '';
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
        ref={result1Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={result2Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={result3Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={result4Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={result5Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={result6Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={result7Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={rbi1Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={rbi2Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={rbi3Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={rbi4Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={rbi5Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={rbi6Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
      <img
        ref={rbi7Ref}
        style={{
          position: 'absolute',
        }}
      ></img>
    </div>
  );
}

export default BatterInfoArea;
