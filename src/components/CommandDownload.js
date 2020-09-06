import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { imageResources } from '../reducers';

import { downloadImages, getFfmpegCommand } from '../utils/func.js';

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
  let previewAreaWidth = useSelector((state) => state.previewAreaWidth);
  let display = useSelector((state) => state.display);
  let player = useSelector((state) => state.player);
  let memberProfile = useSelector((state) => state.memberProfile);
  let data = useSelector((state) => state.data);
  let command = ''; //ffmpeg用コマンド

  const buttonClick = async (e) => {
    //前準備（urlとindexのひもづけ）
    let imgIndices = {};
    let imgSrcDic = Object.assign({}, imageResources);
    memberProfile.map((prof) => {
      imgSrcDic[prof.name] = prof.nameSrc;
    });
    let keys = Object.keys(imgSrcDic);
    let cnt = 1;
    for (let i = 0; i < keys.length; i++) {
      imgIndices[keys[i]] = cnt;
      cnt++;
    }
    // 画像の一括ダウンロードリンクの作成
    downloadImages(imgSrcDic);

    let sizeRatio = 1920 / previewAreaWidth;

    //ffmpegコマンドの生成
    let com = await getFfmpegCommand(sizeRatio, imgSrcDic, imgIndices, data, display);
    //メインコマンド
    //最後のtmpは削除する。

    console.log(com);
  };

  const buttonClick2 = (e) => {
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

    canvas.width = parseInt(player.videoWidth) * 4;
    canvas.height = parseInt(player.videoHeight) * 4;
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
    ctx.fillStyle = 'rgb(0, 0, 0, 255)';

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // sleep(1000);
    //フレーム描画開始

    let tmpImg;
    setTimeout(() => {
      tmpImg = new Image();
      tmpImg.onload = function () {
        ctx.drawImage(tmpImg, 120, 120);
      };
      // tmpImg.src = runner_12;
      setTimeout(() => {
        tmpImg = new Image();
        tmpImg.onload = function () {
          tmpImg.width *= 4;
          ctx.drawImage(tmpImg, 1200, 1200);
        };
        // tmpImg.src = runner_13;

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
      <a href="#" id="downloadlink">
        ダウンロード
      </a>
      {/* <p>
      </p>
      <p>
        <canvas id="preview"></canvas>
      </p> */}
    </div>
  );
}

export default CommandDownload;
