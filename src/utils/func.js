import JSZip from 'jszip';
//ランナー
import runner_main from '../resources/runner/runner_main.png';
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
import score_main from '../resources/score/score_main.png';
import attack from '../resources/score/attack.png';
import tanita_name from '../resources/score/tanita_name.png';
import enermy_name from '../resources/score/enermy_name.png';
//カウント
import count_main from '../resources/count/count_main.png';
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
import batter_main from '../resources/batter/batter_main.png';
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

export async function downloadImages(imgSrcDic) {
  //画像取得
  //画像名から、インデックスを取得するオブジェクトを生成

  // 画像 URL

  // JSZip に追加するために非同期リクエストを Promise で wrap
  let keys = Object.keys(imgSrcDic);
  const imagePromises = keys.map(
    (key, index) =>
      new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', imgSrcDic[key], true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
          // ファイル名とデータ返却
          const fileName = key + '.png';
          resolve({ data: this.response, fileName: fileName });
        };
        // reject だと await Promise.all を抜けてしまう
        // => resolve でデータ無し
        xhr.onerror = () => resolve({ data: null });
        xhr.onabort = () => resolve({ data: null });
        xhr.ontimeout = () => resolve({ data: null });
        xhr.send();
      })
  );

  // すべての画像が取得できたら zip 生成
  const images = await Promise.all(imagePromises);
  generateImagesZip(images);
}

// zip ファイルで画像をダウンロード
function generateImagesZip(images) {
  let zip = new JSZip();

  // フォルダ作成
  const folderName = 'tempFolder';
  let folder = zip.folder(folderName);

  // フォルダ下に画像を格納
  images.forEach((image) => {
    if (image.data && image.fileName) {
      folder.file(image.fileName, image.data);
    }
  });

  // zip を生成
  zip.generateAsync({ type: 'blob' }).then((blob) => {
    // blob から URL を生成
    let anchor = document.getElementById('downloadlink');
    const dataUrl = URL.createObjectURL(blob);
    anchor.href = dataUrl;
    anchor.download = `${folderName}.zip`;
  });
}

export async function getFfmpegCommand(sizeRatio, imgSrcDic, imgIndices, data, display) {
  let cnt = 0;
  let mainCommand = 'ffmpeg -i input.mp4 ^\n';
  let keys = Object.keys(imgIndices); //imgIndicesのvalueはソートされてるはず
  for (let i = 0; i < keys.length; i++) {
    mainCommand += `-i ${keys[i]}.png ^\n`;
  }
  mainCommand += `-vcodec h264_nvenc ^\n`;
  //ソートする
  object_array_sort(data, 'Time', 'asc', function (new_data) {
    data = new_data;
  });

  mainCommand += `-filter_complex "`;
  mainCommand += `[0:v] scale=1920:1080 [tmp0];`;

  let comsPromise = [];

  async function getOverlayCommand() {
    let tmpCommand1 = '';
    {
      let IsEnd = false;
      let inningNames = [];
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(async (val1) => {
        ['表', '裏'].map((val2) => {
          inningNames.push(`${val1}回${val2}`);
        });
      });

      for (let i = 0; i < inningNames.length; i++) {
        let inningName = inningNames[i];
        let td = data.filter((item, index) => item.Event1.includes(inningName));
        let td_start = td.filter((item, index) => item.Event2.includes('開始'));
        let td_end = td.filter((item, index) => item.Event2.includes('終了'));
        if (td_start.length > 0 && td_end.length > 0) {
          let inningStartTime = td_start[0].Time;
          let inningEndTime = td_end[0].Time;
          let td2 = data.filter(
            (item) => item.Time >= inningStartTime && item.Time <= inningEndTime
          );
          console.log(td2);

          let ratio;
          let x0;
          let y0;
          let w0;
          let h0;

          async function getRunner_MainCommand() {
            let area = display.runnerInfoArea;
            let res = '';
            let mainImg = new Image();
            return new Promise((resolve) => {
              mainImg.onload = function () {
                ratio = (area.width_abs / this.width) * sizeRatio;
                x0 = Math.round(area.left_abs * sizeRatio);
                y0 = Math.round(area.top_abs * sizeRatio);
                w0 = Math.round(this.width * ratio);
                h0 = Math.round(this.height * ratio);

                //ランナーメイン画像
                res = `[${imgIndices['runner_main']}:v]scale=${w0}:${h0} [tmp0_${cnt}], `;
                res += `[tmp${cnt}][tmp0_${cnt}] overlay=${x0}:${y0}:enable='between(t,${inningStartTime},${inningEndTime})' [tmp${
                  cnt + 1
                }]; `;
                cnt += 1;
                resolve(res);
              };
              mainImg.src = area['main'].src;
            });
          }

          tmpCommand1 += await getRunner_MainCommand();
          console.log(tmpCommand1);
          //イニング
          async function getInningCommand() {
            let res = '';
            let img = new Image();
            return new Promise((resolve) => {
              img.onload = function () {
                //サイズ計算
                let w1 = Math.round(this.width * ratio);
                let h1 = Math.round(this.height * ratio);

                //位置計算
                let y1 = Math.round((h0 - h1) * 0.5 + y0);
                let x1 = Math.round((w0 - w1) * 0.5 + x0);

                res += `[${imgIndices[inningName]}:v]scale=${w1}:${h1} [tmp0_${cnt}], `;
                res += `[tmp${cnt}][tmp0_${cnt}] overlay=${x1}:${y1}:enable='between(t,${inningStartTime},${inningEndTime})' [tmp${
                  cnt + 1
                }]; `;
                cnt += 1;
                resolve(res);
              };
              img.src = imgSrcDic[inningName];
            });
          }
          tmpCommand1 += await getInningCommand();
          //ランナー
          async function getRunnerCommand() {
            let res = '';
            let runnerData = td2.filter((item, index) => item.Event2.includes('runner'));
            let flgSum = 0; //すべてロードし終わったかどうかをチェックするフラグ
            if (runnerData.length > 0) {
              //一番最初（ランナー無し）
              async function getRunnerCommand1() {
                return new Promise((resolve) => {
                  let res1 = '';
                  let runnerName = 'runner_0';
                  let img = new Image();
                  img.onload = function () {
                    //サイズ計算
                    let w1 = Math.round(this.width * ratio);
                    let h1 = Math.round(this.height * ratio);

                    //位置計算
                    let y1 = Math.round((h0 - h1) * 0.5 + y0);
                    let x1 = Math.round((w0 - w1) * 0.5 + x0);

                    res1 += `[${imgIndices[runnerName]}:v]scale=${w1}:${h1} [tmp0_${cnt}], `;
                    res1 += `[tmp${cnt}][tmp0_${cnt}] overlay=${x1}:${y1}:enable='between(t,${inningStartTime},${
                      runnerData[0].Time
                    })' [tmp${cnt + 1}]; `;
                    cnt += 1;
                    console.log(res1);
                    resolve(res1);
                  };
                  img.src = imgSrcDic[runnerName];
                });
              }
              res += await getRunnerCommand1();

              //一番最後のものは除外
              for (let i = 0; i < runnerData.length - 1; i++) {
                async function getRunnerCommand2() {
                  return new Promise((resolve) => {
                    let res1 = '';
                    let runnerName = runnerData[i].Event2;
                    let img = new Image();
                    img.onload = function () {
                      //サイズ計算
                      let w1 = Math.round(this.width * ratio);
                      let h1 = Math.round(this.height * ratio);

                      //位置計算
                      let y1 = Math.round((h0 - h1) * 0.5 + y0);
                      let x1 = Math.round((w0 - w1) * 0.5 + x0);

                      res1 += `[${imgIndices[runnerName]}:v]scale=${w1}:${h1} [tmp0_${cnt}], `;
                      res1 += `[tmp${cnt}][tmp0_${cnt}] overlay=${x1}:${y1}:enable='between(t,${
                        runnerData[i].Time
                      },${runnerData[i + 1].Time})' [tmp${cnt + 1}]; `;
                      cnt += 1;
                      console.log(res1);
                      resolve(res1);
                    };
                    img.src = imgSrcDic[runnerName];
                  });
                }
                res += await getRunnerCommand2();
              }
              //一番最後
              async function getRunnerCommand3() {
                return new Promise((resolve) => {
                  let res1 = '';
                  let runnerName = runnerData[runnerData.length - 1].Event2;
                  let img = new Image();
                  img.onload = function () {
                    //サイズ計算
                    let w1 = Math.round(this.width * ratio);
                    let h1 = Math.round(this.height * ratio);

                    //位置計算
                    let y1 = Math.round((h0 - h1) * 0.5 + y0);
                    let x1 = Math.round((w0 - w1) * 0.5 + x0);

                    res1 += `[${imgIndices[runnerName]}:v]scale=${w1}:${h1} [tmp0_${cnt}], `;
                    res1 += `[tmp${cnt}][tmp0_${cnt}] overlay=${x1}:${y1}:enable='between(t,${
                      runnerData[runnerData.length - 1].Time
                    },${inningEndTime})' [tmp${cnt + 1}]; `;
                    cnt += 1;
                    console.log(res1);
                    resolve(res1);
                  };
                  img.src = imgSrcDic[runnerName];
                });
              }
              res += await getRunnerCommand3();
            } else {
              //一番最初（ランナー無し）
              async function getRunnerCommand1() {
                return new Promise((resolve) => {
                  let res1 = '';
                  let runnerName = 'runner_0';
                  let img = new Image();
                  img.onload = function () {
                    //サイズ計算
                    let w1 = Math.round(this.width * ratio);
                    let h1 = Math.round(this.height * ratio);

                    //位置計算
                    let y1 = Math.round((h0 - h1) * 0.5 + y0);
                    let x1 = Math.round((w0 - w1) * 0.5 + x0);

                    res1 += `[${imgIndices[runnerName]}:v]scale=${w1}:${h1} [tmp0_${cnt}], `;
                    res1 += `[tmp${cnt}][tmp0_${cnt}] overlay=${x1}:${y1}:enable='between(t,${inningStartTime},${inningEndTime})' [tmp${
                      cnt + 1
                    }]; `;
                    cnt += 1;
                    console.log(res1);
                    resolve(res1);
                  };
                  img.src = imgSrcDic[runnerName];
                });
              }
              res += await getRunnerCommand1();
            }
            return new Promise((resolve) => {
              resolve(res);
            });
          }
          tmpCommand1 += await getRunnerCommand();
          //スコア
          async function getScore_MainCommand() {
            return new Promise((resolve) => {
              let res = '';
              let mainImg = new Image();
              let area = display.scoreInfoArea;
              mainImg.onload = function () {
                ratio = (area.width_abs / this.width) * sizeRatio;
                x0 = Math.round(area.left_abs * sizeRatio);
                y0 = Math.round(area.top_abs * sizeRatio);
                w0 = Math.round(this.width * ratio);
                h0 = Math.round(this.height * ratio);

                res = `[${imgIndices['score_main']}:v]scale=${w0}:${h0} [tmp0_${cnt}], `;
                res += `[tmp${cnt}][tmp0_${cnt}] overlay=${x0}:${y0}:enable='between(t,${inningStartTime},${inningEndTime})' [tmp${
                  cnt + 1
                }]; `;
                cnt += 1;
                console.log(res);
                resolve(res);
              };
              mainImg.src = imgSrcDic['score_main'];
            });
          }
          tmpCommand1 += await getScore_MainCommand();
          async function getScore_Team1NameCommand() {
            return new Promise((resolve) => {
              let area = display.scoreInfoArea;
              let res1 = '';
              let scoreName = area.name1.name;
              let img = new Image();
              img.onload = function () {
                //サイズ計算
                let w1 = Math.round(this.width * ratio);
                let h1 = Math.round(this.height * ratio);

                //位置計算
                let y1 = Math.round(((h0 - h1) * area.name1.top_per) / 100 + y0);
                let x1 = Math.round(((w0 - w1) * area.name1.left_per) / 100 + x0);

                res1 += `[${imgIndices[scoreName]}:v]scale=${w1}:${h1} [tmp0_${cnt}], `;
                res1 += `[tmp${cnt}][tmp0_${cnt}] overlay=${x1}:${y1}:enable='between(t,${inningStartTime},${inningEndTime})' [tmp${
                  cnt + 1
                }]; `;
                cnt += 1;
                console.log(res1);
                resolve(res1);
              };
              img.src = imgSrcDic[scoreName];
            });
          }
          tmpCommand1 += await getScore_Team1NameCommand();
          async function getScore_Team2NameCommand() {
            return new Promise((resolve) => {
              let area = display.scoreInfoArea;
              let res1 = '';
              let scoreName = area.name2.name;
              let img = new Image();
              img.onload = function () {
                //サイズ計算
                let w1 = Math.round(this.width * ratio);
                let h1 = Math.round(this.height * ratio);

                //位置計算
                let y1 = Math.round(((h0 - h1) * area.name2.top_per) / 100 + y0);
                let x1 = Math.round(((w0 - w1) * area.name2.left_per) / 100 + x0);

                res1 += `[${imgIndices[scoreName]}:v]scale=${w1}:${h1} [tmp0_${cnt}], `;
                res1 += `[tmp${cnt}][tmp0_${cnt}] overlay=${x1}:${y1}:enable='between(t,${inningStartTime},${inningEndTime})' [tmp${
                  cnt + 1
                }]; `;
                cnt += 1;
                console.log(res1);
                resolve(res1);
              };
              img.src = imgSrcDic[scoreName];
            });
          }
          tmpCommand1 += await getScore_Team2NameCommand();
          async function getScore_AttackCommand() {
            return new Promise((resolve) => {
              let area = display.scoreInfoArea;
              let res1 = '';
              let scoreName = area.attack.src;
              let img = new Image();
              img.onload = function () {
                //サイズ計算
                let w1 = Math.round(this.width * ratio);
                let h1 = Math.round(this.height * ratio);

                //位置計算
                let y1 = Math.round(((h0 - h1) * area.attack.top_per) / 100 + y0);
                let x1 = Math.round(((w0 - w1) * area.attack.left_per) / 100 + x0);

                res1 += `[${imgIndices[scoreName]}:v]scale=${w1}:${h1} [tmp0_${cnt}], `;
                res1 += `[tmp${cnt}][tmp0_${cnt}] overlay=${x1}:${y1}:enable='between(t,${inningStartTime},${inningEndTime})' [tmp${
                  cnt + 1
                }]; `;
                cnt += 1;
                console.log(res1);
                resolve(res1);
              };
              img.src = imgSrcDic[scoreName];
            });
          }
          tmpCommand1 += await getScore_Team1NameCommand();
        }
      }
    }
    return tmpCommand1;
  }

  mainCommand += await getOverlayCommand();
  mainCommand = mainCommand.replace(`[tmp${cnt}];`, '');
  mainCommand += `" output.mp4 -y`;

  return mainCommand;
}

export function getChildImageInfo(w0, h0, ratio, src, top_per, left_per, current) {
  let img = new Image();
  img.onload = function () {
    let w1 = this.width * ratio;
    let h1 = this.height * ratio;
    let tmpLeft = (w0 * left_per) / 100 - w1 / 2;
    let tmpTop = (h0 * top_per) / 100 - h1 / 2;

    current.style.top = tmpTop + 'px';
    current.style.left = tmpLeft + 'px';
    current.style.width = w1 + 'px';

    current.src = img.src;
  };
  img.src = src;
}
