import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
//ランナー
import runner_main from '../resources/runner/main.png';
import runner_0 from '../resources/runner/runner_0.png';
import runner_1 from '../resources/runner/runner_1.png';
import runner_2 from '../resources/runner/runner_2.png';
import runner_3 from '../resources/runner/runner_3.png';
import runner_12 from '../resources/runner/runner_12.png';
import runner_13 from '../resources/runner/runner_13.png';
import runner_23 from '../resources/runner/runner_23.png';
import runner_123 from '../resources/runner/runner_123.png';
//イニング
import omote_1 from '../images/1表.png';
import ura_1 from '../images/1ウラ.png';
import omote_2 from '../images/2表.png';
import ura_2 from '../images/2ウラ.png';
import omote_3 from '../images/3表.png';
import ura_3 from '../images/3ウラ.png';
import omote_4 from '../images/4表.png';
import ura_4 from '../images/4ウラ.png';
import omote_5 from '../images/5表.png';
import ura_5 from '../images/5ウラ.png';
import omote_6 from '../images/6表.png';
import ura_6 from '../images/6ウラ.png';
import omote_7 from '../images/7表.png';
import ura_7 from '../images/7ウラ.png';
import omote_8 from '../images/8表.png';
import ura_8 from '../images/8ウラ.png';
import omote_9 from '../images/9表.png';
import ura_9 from '../images/9ウラ.png';
//スコア
import score_main from '../resources/score/main.png';
import attack from '../resources/score/attack.png';
import tanita_name from '../resources/score/tanita_name.png';
import enermy_name from '../resources/score/enermy_name.png';
//カウント
import count_main from '../resources/count/main.png';
import strike_0 from '../resources/count/strike_0.png';
import strike_1 from '../resources/count/strike_1.png';
import strike_2 from '../resources/count/strike_2.png';
import out_0 from '../resources/count/out_0.png';
import out_1 from '../resources/count/out_1.png';
import out_2 from '../resources/count/out_2.png';
import ball_0 from '../resources/count/ball_0.png';
import ball_1 from '../resources/count/ball_1.png';
import ball_2 from '../resources/count/ball_2.png';
import ball_3 from '../resources/count/ball_3.png';
//バッター
import batter_main from '../resources/batter/main.png';
import rbi1 from '../resources/batter/rbi1.png';
import rbi2 from '../resources/batter/rbi2.png';
import rbi3 from '../resources/batter/rbi3.png';
import rbi4 from '../resources/batter/rbi4.png';
import bunt from '../resources/batter/bunt.png';
import deadball from '../resources/batter/deadball.png';
import fourballs from '../resources/batter/fourballs.png';
import strikeout from '../resources/batter/strikeout.png';
import error1 from '../resources/batter/error1.png';
import error2 from '../resources/batter/error2.png';
import error3 from '../resources/batter/error3.png';
import error4 from '../resources/batter/error4.png';
import error5 from '../resources/batter/error5.png';
import error6 from '../resources/batter/error6.png';
import error7 from '../resources/batter/error7.png';
import error8 from '../resources/batter/error8.png';
import error9 from '../resources/batter/error9.png';
import groundout1 from '../resources/batter/groundout1.png';
import groundout2 from '../resources/batter/groundout2.png';
import groundout3 from '../resources/batter/groundout3.png';
import groundout4 from '../resources/batter/groundout4.png';
import groundout5 from '../resources/batter/groundout5.png';
import groundout6 from '../resources/batter/groundout6.png';
import groundout7 from '../resources/batter/groundout7.png';
import groundout8 from '../resources/batter/groundout8.png';
import groundout9 from '../resources/batter/groundout9.png';
import flyout1 from '../resources/batter/flyout1.png';
import flyout2 from '../resources/batter/flyout2.png';
import flyout3 from '../resources/batter/flyout3.png';
import flyout4 from '../resources/batter/flyout4.png';
import flyout5 from '../resources/batter/flyout5.png';
import flyout6 from '../resources/batter/flyout6.png';
import flyout7 from '../resources/batter/flyout7.png';
import flyout8 from '../resources/batter/flyout8.png';
import flyout9 from '../resources/batter/flyout9.png';
import hit1_1 from '../resources/batter/hit1_1.png';
import hit1_2 from '../resources/batter/hit1_2.png';
import hit1_3 from '../resources/batter/hit1_3.png';
import hit1_4 from '../resources/batter/hit1_4.png';
import hit1_5 from '../resources/batter/hit1_5.png';
import hit1_6 from '../resources/batter/hit1_6.png';
import hit1_7 from '../resources/batter/hit1_7.png';
import hit1_8 from '../resources/batter/hit1_8.png';
import hit1_9 from '../resources/batter/hit1_9.png';
import hit2_1 from '../resources/batter/hit2_1.png';
import hit2_2 from '../resources/batter/hit2_2.png';
import hit2_3 from '../resources/batter/hit2_3.png';
import hit2_4 from '../resources/batter/hit2_4.png';
import hit2_5 from '../resources/batter/hit2_5.png';
import hit2_6 from '../resources/batter/hit2_6.png';
import hit2_7 from '../resources/batter/hit2_7.png';
import hit2_8 from '../resources/batter/hit2_8.png';
import hit2_9 from '../resources/batter/hit2_9.png';
import hit3_1 from '../resources/batter/hit3_1.png';
import hit3_2 from '../resources/batter/hit3_2.png';
import hit3_3 from '../resources/batter/hit3_3.png';
import hit3_4 from '../resources/batter/hit3_4.png';
import hit3_5 from '../resources/batter/hit3_5.png';
import hit3_6 from '../resources/batter/hit3_6.png';
import hit3_7 from '../resources/batter/hit3_7.png';
import hit3_8 from '../resources/batter/hit3_8.png';
import hit3_9 from '../resources/batter/hit3_9.png';
import hit4_1 from '../resources/batter/hit4_1.png';
import hit4_2 from '../resources/batter/hit4_2.png';
import hit4_3 from '../resources/batter/hit4_3.png';
import hit4_4 from '../resources/batter/hit4_4.png';
import hit4_5 from '../resources/batter/hit4_5.png';
import hit4_6 from '../resources/batter/hit4_6.png';
import hit4_7 from '../resources/batter/hit4_7.png';
import hit4_8 from '../resources/batter/hit4_8.png';
import hit4_9 from '../resources/batter/hit4_9.png';

function object_array_sort(data, key, order, fn) {
  //デフォは降順(DESC)
  var num_a = -1;
  var num_b = 1;

  if (order === 'asc') {
    //指定があれば昇順(ASC)
    num_a = 1;
    num_b = -1;
  }

  data = data.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    if (x > y) return num_a;
    if (x < y) return num_b;
    return 0;
  });

  fn(data); // ソート後の配列を返す
}

function sleep(waitMsec) {
  var startMsec = new Date();

  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

// function viewFrame(frame_no = -1) {
//   //フレーム番号をカウントアップ
//   frame_no++;
//   if (frames[frame_no]) {
//     //次のフレームをキャンバスに画像を描画
//     ctx.drawImage(frames[frame_no], 0, 0);
//     setTimeout(function () {
//       viewFrame(frame_no);
//     }, 200);
//   } else {
//     //次のスライドがなければ録画終了
//     recorder.stop();
//   }
// }

function CommandDownload() {
  const dispatch = useDispatch();
  let player = useSelector((state) => state.player);
  let data = useSelector((state) => state.data);
  let command = ''; //ffmpeg用コマンド

  console.log('hello');
  const buttonClick = (e) => {
    // console.log(data);
    // command = 'ffmpeg -i video2.mp4 -i logo.png -filter_complex';
    // //ソートする
    // object_array_sort(data, 'Time', 'asc', function (new_data) {
    //   data = new_data;
    // });
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((val1, index1) => {
    //   ['表', '裏'].map((val2, index2) => {
    //     let tmpData = data.filter(function (item, index3) {
    //       let s = val1 + '回' + val2;
    //       if (item.Event1.includes(s)) {
    //         return true;
    //       }
    //     });
    //     console.log(tmpData);
    //   });
    // });

    // var types = [
    //   'video/webm',
    //   'audio/webm',
    //   'video/webm;codecs=vp8',
    //   'video/webm;codecs=daala',
    //   'video/webm;codecs=h264',
    //   'audio/webm;codecs=opus',
    //   'video/mpeg',
    // ];

    // for (var i in types) {
    //   console.log(
    //     types[i] +
    //       ' をサポートしている？ ' +
    //       (MediaRecorder.isTypeSupported(types[i]) ? 'たぶん！' : 'いいえ :(')
    //   );
    // }

    //canvasの取得
    let canvas = document.getElementById('preview');
    // let canvas = document.createElement('canvas');

    canvas.width = parseInt(player.videoWidth);
    canvas.height = parseInt(player.videoHeight);
    console.log(canvas);
    let ctx = canvas.getContext('2d');
    //canvasからストリームを取得
    let stream = canvas.captureStream();
    // player.srcObject = stream;
    //ストリームからMediaRecorderを生成
    let recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=h264' });
    //ダウンロード用のリンクを準備
    let anchor = document.getElementById('downloadlink');

    recorder.ondataavailable = function (e) {
      console.log(e.data);
      console.log('recorder stop');
      var videoBlob = new Blob([e.data], { type: 'video/webm;codecs=h264' });
      console.log(videoBlob);
      let createObjectURL =
        (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
      let blobUrl = createObjectURL(videoBlob);
      // player.src = blobUrl;
      console.log(blobUrl);
      anchor.href = blobUrl;
      anchor.download = 'movie.mkv';
    };

    //録画開始
    recorder.start();
    ctx.fillStyle = 'rgb(0, 255, 0)';

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // sleep(1000);
    //フレーム描画開始

    let tmpImg;
    setTimeout(() => {
      tmpImg = new Image();
      tmpImg.onload = function () {
        ctx.drawImage(tmpImg, 120, 120);
      };
      tmpImg.src = runner_12;
      setTimeout(() => {
        tmpImg = new Image();
        tmpImg.onload = function () {
          ctx.drawImage(tmpImg, 240, 240);
        };
        tmpImg.src = runner_13;

        setTimeout(() => {
          recorder.stop();
        }, 1000);
      }, 1000);
    }, 1000);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={buttonClick}>
        動画編集コマンドダウンロード
      </Button>
      <p>
        <a href="#" id="downloadlink">
          ダウンロード
        </a>
      </p>
      <p>
        <canvas id="preview"></canvas>
      </p>
    </div>
  );
}

export default CommandDownload;
