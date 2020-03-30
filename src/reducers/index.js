import * as actionTypes from '../utils/actionTypes';
import { combineReducers } from 'redux';
import { act } from 'react-dom/test-utils';
import runner_1 from "../images/ランナー1塁.png";
import runner_2 from "../images/ランナー2塁.png";
import runner_3 from "../images/ランナー3塁.png";
import runner_12 from "../images/ランナー12塁.png";
import runner_13 from "../images/ランナー13塁.png";
import runner_23 from "../images/ランナー23塁.png";
import runner_123 from "../images/ランナー満塁.png";
import tanita_vs_enemy from "../images/タニター相手.png"

const initialState = {
  player: {},
  isPlaying: false,
  src: '',
  data: [
    { UserID: '永濱敏樹', Event1: 'offence', Event2: '左前安打', RBI: 0, Time: 100 },
    { UserID: '角野陽昴', Event1: 'offence', Event2: '左前安打', RBI: 0, Time: 200 },
  ],
  isSenkou: true,
  memberProfile: [],
  currentTime: 0,
  currentBatter: '',
  batterScoreResult: '',
  nextInning: 0,
  selectedInning: 1,
  selectedOmote: '表',
  activeImage: [{ src: runner_123 }, { src: tanita_vs_enemy }],
};

const reducer = (state = initialState, action) => {
  let newData = [];
  switch (action.type) {
    case actionTypes.VIDEO_OPERATION:
      return {
        ...state,
        player: action.player,
      };
    case actionTypes.VIDEO_SRC_CHANGE:
      console.log(action.src);
      return {
        ...state,
        src: action.src,
      };
    case actionTypes.VIDEO_CURRENTTIME_CHANGE:
      return {
        ...state,
        currentTime: action.currentTime,
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
      console.log(action.profiles);
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

      return {
        ...state,
        isSenkou: action.isSenkou,
        memberProfile: memberProfile,
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
        activeImage: [{ src: runner_1 }]
      };
    case actionTypes.BATTER_END:
      newData.push({
        UserID: action.currentBatter.name,
        Event1: 'offence',
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
      state.batterScoreResult = "";
      return {
        ...state,
        data: newData,
        activeImage: [{ src: runner_12 }]
      };
    case actionTypes.BATTER_SCORE_CHANGE:
      return {
        ...state,
        batterScoreResult: action.scoreResult
      };
    default:
      return state;
  }
};

export default reducer;
