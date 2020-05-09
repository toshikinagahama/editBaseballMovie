import * as actionTypes from '../utils/actionTypes';
import { combineReducers } from 'redux';
import { act } from 'react-dom/test-utils';
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

export let imageResources = {
  score_main: score_main,
  相手: enermy_name,
  タニタ: tanita_name,
  '1回表': omote_1,
  '1回裏': ura_1,
  '2回表': omote_2,
  '2回裏': ura_2,
  '3回表': omote_3,
  '3回裏': ura_3,
  '4回表': omote_4,
  '4回裏': ura_4,
  '5回表': omote_5,
  '5回裏': ura_5,
  '6回表': omote_6,
  '6回裏': ura_6,
  '7回表': omote_7,
  '7回裏': ura_7,
  '8回表': omote_8,
  '8回裏': ura_8,
  '9回表': omote_9,
  '9回裏': ura_9,
  runner_main: runner_main,
  runner_0: runner_0,
  runner_1: runner_1,
  runner_2: runner_2,
  runner_3: runner_3,
  runner_12: runner_12,
  runner_13: runner_13,
  runner_23: runner_23,
  runner_123: runner_123,
  batter_main: batter_main,
  三振: strikeout,
  四球: fourballs,
  死球: deadball,
  バント: bunt,
  投ゴロ: groundout1,
  捕ゴロ: groundout2,
  一ゴロ: groundout3,
  二ゴロ: groundout4,
  三ゴロ: groundout5,
  遊ゴロ: groundout6,
  左ゴロ: groundout7,
  中ゴロ: groundout8,
  右ゴロ: groundout9,
  投フライ: flyout1,
  捕フライ: flyout2,
  一フライ: flyout3,
  二フライ: flyout4,
  三フライ: flyout5,
  遊フライ: flyout6,
  左フライ: flyout7,
  中フライ: flyout8,
  右フライ: flyout9,
  投エラー: error1,
  捕エラー: error2,
  一エラー: error3,
  二エラー: error4,
  三エラー: error5,
  遊エラー: error6,
  左エラー: error7,
  中エラー: error8,
  右エラー: error9,
  投安打: hit1_1,
  捕安打: hit1_2,
  一安打: hit1_3,
  二安打: hit1_4,
  三安打: hit1_5,
  遊安打: hit1_6,
  左安打: hit1_7,
  中安打: hit1_8,
  右安打: hit1_9,
  投2塁打: hit2_1,
  捕2塁打: hit2_2,
  一2塁打: hit2_3,
  二2塁打: hit2_4,
  三2塁打: hit2_5,
  遊2塁打: hit2_6,
  左2塁打: hit2_7,
  中2塁打: hit2_8,
  右2塁打: hit2_9,
  投3塁打: hit3_1,
  捕3塁打: hit3_2,
  一3塁打: hit3_3,
  二3塁打: hit3_4,
  三3塁打: hit3_5,
  遊3塁打: hit3_6,
  左3塁打: hit3_7,
  中3塁打: hit3_8,
  右3塁打: hit3_9,
  投本塁打: hit4_1,
  捕本塁打: hit4_2,
  一本塁打: hit4_3,
  二本塁打: hit4_4,
  三本塁打: hit4_5,
  遊本塁打: hit4_6,
  左本塁打: hit4_7,
  中本塁打: hit4_8,
  右本塁打: hit4_9,
  '0': '',
  '1': rbi1,
  '2': rbi2,
  '3': rbi3,
  '4': rbi4,
};

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
// スコア初期化
let cnvs = document.createElement('canvas');
let ctx = cnvs.getContext('2d');

// 変数宣言
ctx.font = '52px Source Han Sans';
ctx.fillStyle = '#ffffff';
ctx.fillText('0', 10, 100);
let tmpURL = cnvs.toDataURL('image/png');

// //イニング情報エリア
// let inningInfoArea = {
//   main: { src: '', top_abs: 0, left_abs: 0, width_abs: 200, height_abs: 100 }, //絶対位置と絶対サイズ
//   inning: { src: '', top_per: 0, left_per: 0, width: 200, height: 100 }, //相対位置と相対サイズ
// };

//スコア情報エリア
let scoreInfoArea = {
  top_abs: 10,
  left_abs: 10,
  width_abs: 295 / 4,
  height_abs: 146 / 4,
  main: { src: score_main }, //絶対位置と絶対サイズ
  attack: { src: attack, top_per: 24, left_per: 38 }, //相対位置と相対サイズ 24と77
  name1: { name: 'タニタ', src: tanita_name, top_per: 24, left_per: 38 }, //相対位置と相対サイズ
  name2: { name: '相手', src: enermy_name, top_per: 77, left_per: 38 }, //相対位置と相対サイズ
  score1: { score: 0, src: tmpURL, top_per: 20, left_per: 131 }, //相対位置と相対サイズ
  score2: { score: 0, src: tmpURL, top_per: 72, left_per: 131 }, //相対位置と相対サイズ
};
//カウント情報エリア
let countInfoArea = {
  top_abs: 10,
  left_abs: 295 / 4 + 13,
  width_abs: 146 / 4,
  height_abs: 146 / 4,
  main: { src: count_main }, //絶対位置と絶対サイズ
  ball: { src: ball_0, top_per: 16, left_per: 50 }, //相対位置と相対サイズ
  strike: { src: strike_0, top_per: 50, left_per: 50 }, //相対位置と相対サイズ
  out: { src: out_0, top_per: 83, left_per: 50 }, //相対位置と相対サイズ
};
//ランナー情報エリア（イニングも入れる）
let runnerInfoArea = {
  top_abs: 10,
  left_abs: 295 / 4 + 16 + 146 / 4,
  width_abs: 210 / 4,
  height_abs: 146 / 4,
  main: { src: runner_main }, //絶対位置と絶対サイズ
  runner: {
    src: '',
    top_per: 50,
    left_per: 50,
  }, //相対位置%と相対サイズ%
  inning: {
    src: omote_1,
    top_per: 50,
    left_per: 50,
  }, //相対位置%と相対サイズ%
};
//バッター情報エリア
let batterInfoArea = {
  top_abs: 400,
  left_abs: 420,
  width_abs: 770 / 2,
  height_abs: 134 / 2,
  main: { src: batter_main }, //絶対位置と絶対サイズ
  name: {
    src: '',
    top_per: 20,
    left_per: 23,
  }, //相対位置%と相対サイズ%
  comment: {
    src: '',
    top_per: 20,
    left_per: 42,
  }, //相対位置%と相対サイズ%
  results: [
    {
      result: {
        src: '',
        top_per: 75,
        left_per: 8,
      },
      rbi: {
        src: '',
        top_per: 89,
        left_per: 15,
      },
    },
    {
      result: {
        src: '',
        top_per: 75,
        left_per: 24,
      },
      rbi: {
        src: '',
        top_per: 89,
        left_per: 31,
      },
    },
    {
      result: {
        src: '',
        top_per: 75,
        left_per: 40,
      },
      rbi: {
        src: '',
        top_per: 89,
        left_per: 47,
      },
    },
    {
      result: {
        src: '',
        top_per: 75,
        left_per: 56,
      },
      rbi: {
        src: '',
        top_per: 89,
        left_per: 63,
      },
    },
    {
      result: {
        src: '',
        top_per: 75,
        left_per: 72,
      },
      rbi: {
        src: '',
        top_per: 89,
        left_per: 79,
      },
    },
    {
      result: {
        src: '',
        top_per: 75,
        left_per: 88,
      },
      rbi: {
        src: '',
        top_per: 89,
        left_per: 95,
      },
    },
    {
      result: {
        src: '',
        top_per: 75,
        left_per: 90,
      },
      rbi: {
        src: '',
        top_per: 89,
        left_per: 96,
      },
    },
  ], //相対位置%と相対サイズ%
};

const initialState = {
  previewAreaWidth: 0,
  player: {},
  isPlaying: false,
  src: '',
  data: [
    { UserID: '-', Event1: '1回表', Event2: '開始', RBI: '-', Time: 1 },
    { UserID: '-', Event1: 'offence', Event2: 'runner_1', RBI: '-', Time: 2 },
    { UserID: '-', Event1: 'offence', Event2: 'runner_12', RBI: '-', Time: 3 },
    { UserID: '-', Event1: 'offence', Event2: 'runner_123', RBI: '-', Time: 4 },
    { UserID: '-', Event1: '1回表', Event2: '終了', RBI: '-', Time: 5 },
    { UserID: '-', Event1: '1回裏', Event2: '開始', RBI: '-', Time: 6 },
    { UserID: '-', Event1: 'offence', Event2: 'runner_1', RBI: '-', Time: 7 },
    { UserID: '-', Event1: '1回裏', Event2: '終了', RBI: '-', Time: 8 },
    { UserID: '-', Event1: '2回表', Event2: '開始', RBI: '-', Time: 9 },
    { UserID: '-', Event1: '2回表', Event2: '終了', RBI: '-', Time: 10 },
    { UserID: '角野', Event1: 'offence', Event2: '打席開始', RBI: 0, Time: 2 },
    { UserID: '角野', Event1: 'offence', Event2: '打席終了', RBI: 0, Time: 2 },
    { UserID: '角野', Event1: '打席結果', Event2: '左本塁打', RBI: 2, Time: 2 },
    { UserID: '角野', Event1: 'offence', Event2: '打席開始', RBI: 0, Time: 2 },
    { UserID: '角野', Event1: 'offence', Event2: '打席終了', RBI: 0, Time: 1 },
    { UserID: '角野', Event1: '打席結果', Event2: '左本塁打', RBI: 2, Time: 1 },
    { UserID: '角野', Event1: 'offence', Event2: '打席開始', RBI: 0, Time: 1 },
    { UserID: '角野', Event1: 'offence', Event2: '打席終了', RBI: 0, Time: 0 },
    { UserID: '角野', Event1: '打席結果', Event2: '三振', RBI: 1, Time: 0 },
    { UserID: '角野', Event1: 'offence', Event2: '打席開始', RBI: 0, Time: 0 },
  ],
  isSenkou: true,
  memberProfile: [
    {
      batterNo: 1,
      name: '大竹',
      comment: '',
      position: '一',
      nameSrc: '',
      commentSrc: '',
    },
    {
      batterNo: 2,
      name: '久米川',
      comment: '',
      position: '中',
      nameSrc: '',
      commentSrc: '',
    },
    {
      batterNo: 3,
      name: '永濱',
      comment: '朝遅刻しました！',
      position: '投',
      nameSrc: '',
      commentSrc: '',
    },
    {
      batterNo: 4,
      name: '角野',
      comment: 'しっかりと楽しみます！',
      position: '捕',
      nameSrc: '',
      commentSrc: '',
    },
    {
      batterNo: 5,
      name: '林',
      comment: '',
      position: '二',
      nameSrc: '',
      commentSrc: '',
    },
    {
      batterNo: 6,
      name: '畠山',
      comment: '',
      position: '遊',
      nameSrc: '',
      commentSrc: '',
    },
    {
      batterNo: 7,
      name: '寺西',
      comment: '',
      position: '三',
      nameSrc: '',
      commentSrc: '',
    },
    {
      batterNo: 8,
      name: '佐藤',
      comment: '',
      position: '右',
      nameSrc: '',
      commentSrc: '',
    },
    {
      batterNo: 9,
      name: '上原',
      comment: '',
      position: '左',
      nameSrc: '',
      commentSrc: '',
    },
  ],
  currentTime: 0,
  currentBatter: '',
  batterScoreResult: '',
  nextInning: 0,
  selectedInning: 1,
  selectedOmote: '表',
  display: {
    runnerInfoArea,
    scoreInfoArea,
    countInfoArea,
    batterInfoArea,
  },
};

const reducer = (state = initialState, action) => {
  let newData = [];
  let data;
  let newActiveImage = [];
  let newDisplay = {
    ...state.display,
  };
  switch (action.type) {
    case actionTypes.VIDEO_OPERATION:
      let ratio = action.previewAreaWidth / 1920; //ビデオのサイズに合わせる
      // console.log(ratio);
      let newMemberProfile = [...state.memberProfile];
      for (let i = 0; i < newMemberProfile.length; i++) {
        {
          let cnvs = document.createElement('canvas');
          let ctx = cnvs.getContext('2d');

          // 変数宣言
          ctx.font = '48px Source Han Sans';
          ctx.fillStyle = '#ffffff';
          ctx.fillText(newMemberProfile[i].name, 10, 100);
          let tmpURL = cnvs.toDataURL('image/png');
          newMemberProfile[i].nameSrc = tmpURL;
        }
        {
          let cnvs = document.createElement('canvas');
          let ctx = cnvs.getContext('2d');

          // 変数宣言
          ctx.font = '24px Source Han Sans';
          ctx.fillStyle = '#000000';
          ctx.fillText(newMemberProfile[i].comment, 10, 100);
          let tmpURL = cnvs.toDataURL('image/png');
          newMemberProfile[i].commentSrc = tmpURL;
        }
      }
      return {
        ...state,
        player: action.player,
        previewAreaWidth: action.previewAreaWidth,
        memberProfile: newMemberProfile,
        display: {
          ...state.display,
          scoreInfoArea: {
            ...state.display.scoreInfoArea,
            top_abs: 10 * ratio,
            left_abs: 10 * ratio,
            width_abs: 295 * ratio,
            height_abs: 146 * ratio,
          },
          countInfoArea: {
            ...state.display.countInfoArea,
            top_abs: 10 * ratio,
            left_abs: 295 * ratio + 13 * ratio,
            width_abs: 146 * ratio,
            height_abs: 146 * ratio,
          },
          runnerInfoArea: {
            ...state.display.runnerInfoArea,
            top_abs: 10 * ratio,
            left_abs: 295 * ratio + 16 * ratio + 146 * ratio,
            width_abs: 210 * ratio,
            height_abs: 146 * ratio,
          },
          batterInfoArea: {
            ...state.display.batterInfoArea,
            top_abs: 900 * ratio,
            left_abs: 1000 * ratio,
            width_abs: 770 * ratio,
            height_abs: 134 * ratio,
          },
        },
      };
    case actionTypes.VIDEO_SRC_CHANGE:
      return {
        ...state,
        src: action.src,
      };
    case actionTypes.VIDEO_CURRENTTIME_CHANGE:
      //イニングの判定
      //直前のタイムラインのイニングを取得
      data = state.data;
      object_array_sort(data, 'Time', 'asc', function (new_data) {
        //ソート後の処理
        data = new_data;
      });

      let inningSrc;
      let runnerSrc;
      let batterName;
      let batterNameSrc;
      let batterCommentSrc;
      let attackTop;
      {
        let filteredData = data.filter(function (item, index) {
          if (item.Time <= action.currentTime) {
            if (item.Event1.includes('回')) {
              //回が含まれているもののみ抽出
              return true;
            }
          }
        });
        if (filteredData.length > 0) {
          if (filteredData[filteredData.length - 1].Event2 === '開始') {
            //直前が開始であれば、そのイニング中である。
            inningSrc = imageResources[filteredData[filteredData.length - 1].Event1];
            if (filteredData[filteredData.length - 1].Event1.includes('表')) {
              attackTop = 24;
            } else {
              attackTop = 76;
            }
            console.log(filteredData[filteredData.length - 1].Event1);
          }
        }
        newDisplay = {
          ...newDisplay,
          runnerInfoArea: {
            ...newDisplay.runnerInfoArea,
            inning: {
              ...newDisplay.runnerInfoArea.inning,
              src: inningSrc,
            },
          },
          scoreInfoArea: {
            ...newDisplay.scoreInfoArea,
            attack: {
              ...newDisplay.scoreInfoArea.attack,
              top_per: attackTop,
            },
          },
        };
      }
      //ランナーの取得
      {
        let filteredData = data.filter(function (item, index) {
          if (item.Time <= action.currentTime) {
            if (item.Event2.includes('runner')) {
              return true;
            }
          }
        });
        if (filteredData.length > 0) {
          runnerSrc = imageResources[filteredData[filteredData.length - 1].Event2];
        }
        newDisplay = {
          ...newDisplay,
          runnerInfoArea: {
            ...newDisplay.runnerInfoArea,
            runner: {
              ...newDisplay.runnerInfoArea.runner,
              src: runnerSrc,
            },
          },
        };
      }
      {
        let filteredData = data.filter(function (item, index) {
          if (item.Time <= action.currentTime) {
            if (item.Event2.includes('打席')) {
              return true;
            }
          }
        });
        if (filteredData.length > 0) {
          if (filteredData[filteredData.length - 1].Event2.includes('開始')) {
            //直前が開始であれば、その人の打席である。
            batterName = filteredData[filteredData.length - 1].UserID;
            let member = state.memberProfile.filter(function (item, index) {
              if (item.name == filteredData[filteredData.length - 1].UserID) {
                return true;
              }
            });
            //エラー処理必要。
            if (member !== undefined) batterNameSrc = member[0].nameSrc;
            if (member !== undefined) batterCommentSrc = member[0].commentSrc;
          }
        }
        // console.log(filteredData);
        // console.log(batterName);
        newDisplay = {
          ...newDisplay,
          runnerInfoArea: {
            ...newDisplay.runnerInfoArea,
            inning: {
              ...newDisplay.runnerInfoArea.inning,
              src: inningSrc,
            },
          },
          batterInfoArea: {
            ...newDisplay.batterInfoArea,
            name: {
              ...newDisplay.batterInfoArea.name,
              src: batterNameSrc,
            },
            comment: {
              ...newDisplay.batterInfoArea.comment,
              src: batterCommentSrc,
            },
          },
        };
        filteredData = data.filter(function (item, index) {
          if (item.Time <= action.currentTime && item.UserID == batterName) {
            if (item.Event1.includes('打席結果')) {
              return true;
            }
          }
        });
        console.log(filteredData);
        for (let i = 0; i < newDisplay.batterInfoArea.results.length; i++) {
          newDisplay.batterInfoArea.results[i].result.src = '';
          newDisplay.batterInfoArea.results[i].rbi.src = '';
        }
        filteredData.map((val, index) => {
          newDisplay.batterInfoArea.results[index].result.src = imageResources[val.Event2];
          newDisplay.batterInfoArea.results[index].rbi.src = imageResources[val.RBI];
        });
        newDisplay = {
          ...newDisplay,
          runnerInfoArea: {
            ...newDisplay.runnerInfoArea,
            inning: {
              ...newDisplay.runnerInfoArea.inning,
              src: inningSrc,
            },
          },
          batterInfoArea: {
            ...newDisplay.batterInfoArea,
            name: {
              ...newDisplay.batterInfoArea.name,
              src: batterNameSrc,
            },
            comment: {
              ...newDisplay.batterInfoArea.comment,
              src: batterCommentSrc,
            },
            results: newDisplay.batterInfoArea.results,
          },
        };
      }
      console.log(newDisplay.batterInfoArea.results);

      return {
        ...state,
        currentTime: action.currentTime,
        display: newDisplay,
      };
    case actionTypes.RESULT_TIMETABLE_ADD:
      if (action.data === undefined) return { ...state };
      return {
        ...state,
        data: state.data.concat(action.data),
      };
    case actionTypes.RESULT_TIMETABLE_UPDATE:
      //パフォーマンス悪いかも
      for (let i = 0; i < state.data.length; i++) {
        if (i === action.index) {
          newData.push(action.data);
          continue;
        }
        newData.push(state.data[i]);
      }
      return {
        ...state,
        data: newData,
      };
    case actionTypes.RESULT_TIMETABLE_DELETE:
      //パフォーマンス悪いかも
      for (let i = 0; i < state.data.length; i++) {
        if (i === action.index) continue;
        newData.push(state.data[i]);
      }
      return {
        ...state,
        data: newData,
      };
    case actionTypes.RESULT_TIMETABLE_SELECT:
      return {
        ...state,
        currentTime: action.data['Time'],
      };
    case actionTypes.SCORE_INNING_START:
      newData.push({
        UserID: '-',
        Event1: action.nextInning,
        Event2: '開始',
        RBI: '-',
        Time: Math.round(state.player.currentTime),
      });
      for (let i = 0; i < state.data.length; i++) {
        newData.push(state.data[i]);
      }
      return {
        ...state,
        nextInning: action.nextInning,
        data: newData,
      };
    case actionTypes.SCORE_INNING_END:
      newData.push({
        UserID: '-',
        Event1: action.nextInning,
        Event2: '終了',
        RBI: '-',
        Time: Math.round(state.player.currentTime),
      });
      for (let i = 0; i < state.data.length; i++) {
        newData.push(state.data[i]);
      }
      return {
        ...state,
        nextInning: action.nextInning,
        data: newData,
      };
    case actionTypes.INNING_SELECT_CHANGE:
      return {
        ...state,
        selectedInning: action.selectedInning,
      };
    case actionTypes.OMOTE_SELECT_CHANGE:
      return {
        ...state,
        selectedOmote: action.selectedOmote,
      };
    case actionTypes.KEY_UP:
      //キーごとに処理を変える。
      let isPlaying;
      if (action.event.keyCode === 32) {
        isPlaying = !state.isPlaying;
      }

      return {
        ...state,
        isPlaying: isPlaying,
      };
    case actionTypes.SET_BASICINFORMATION:
      let memberProfile = [];
      const orderNoList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      for (let i = 0; i < orderNoList.length; i++) {
        let val = orderNoList[i];
        if (val <= 9) {
          memberProfile.push({
            batterNo: action.profiles[val].batterNo,
            name: action.profiles[val].name,
            position: action.profiles[val].position,
          });
        } else {
          if (action.profiles[val].name === '') {
            //9番打者以降の名前がなかったら、そこまでが先発メンバー
            break;
          }
        }
      }
      let newScoreInfoArea = { ...state.display.scoreInfoArea };
      if (action.isSenkou) {
        newScoreInfoArea.name1 = { name: 'タニタ', src: tanita_name, top_per: 24, left_per: 38 };
        newScoreInfoArea.name2 = { name: '相手', src: enermy_name, top_per: 77, left_per: 38 };
      } else {
        newScoreInfoArea.name1 = { name: '相手', src: enermy_name, top_per: 24, left_per: 38 };
        newScoreInfoArea.name2 = { name: 'タニタ', src: tanita_name, top_per: 77, left_per: 38 };
      }
      newDisplay = { ...state.display };
      newDisplay = {
        ...newDisplay,
        scoreInfoArea: newScoreInfoArea,
      };
      return {
        ...state,
        isSenkou: action.isSenkou,
        memberProfile: memberProfile,
        display: newDisplay,
      };
    case actionTypes.BATTER_CHANGE:
      return {
        ...state,
        currentBatter: action.currentBatter,
      };
    case actionTypes.BATTER_START:
      console.log();
      newData.push({
        UserID: action.currentBatter.name,
        Event1: 'offence',
        Event2: '打席開始',
        RBI: '-',
        Time: Math.round(state.player.currentTime),
      });
      for (let i = 0; i < state.data.length; i++) {
        newData.push(state.data[i]);
      }
      return {
        ...state,
        data: newData,
      };
    case actionTypes.BATTER_END:
      newData.push({
        UserID: action.currentBatter.name,
        Event1: '打席結果',
        Event2: state.batterScoreResult,
        RBI: '-',
        Time: Math.round(state.player.currentTime),
      });
      newData.push({
        UserID: action.currentBatter.name,
        Event1: 'offence',
        Event2: '打席終了',
        RBI: '-',
        Time: Math.round(state.player.currentTime),
      });
      for (let i = 0; i < state.data.length; i++) {
        newData.push(state.data[i]);
      }
      state.batterScoreResult = '';
      return {
        ...state,
        data: newData,
      };
    case actionTypes.BATTER_SCORE_CHANGE:
      return {
        ...state,
        batterScoreResult: action.scoreResult,
      };
    case actionTypes.RUNNER_INFO_AREA_CHANGE:
      return {
        ...state,
        display: {
          ...state.display,
          runnerInfoArea: {
            ...state.display.runnerInfoArea,
            top_abs: action.top,
            left_abs: action.left,
            width_abs: action.width,
            height_abs: action.height,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
