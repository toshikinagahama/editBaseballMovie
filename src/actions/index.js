import * as actionTypes from '../utils/actionTypes';
import { Profiler } from 'react';

export const video_oprationAction = (player, previewAreaWidth) => ({
  type: actionTypes.VIDEO_OPERATION,
  player,
  previewAreaWidth,
});

export const video_srcChange = (src) => ({
  type: actionTypes.VIDEO_SRC_CHANGE,
  src,
});

export const video_currentTimeChange = (currentTime) => ({
  type: actionTypes.VIDEO_CURRENTTIME_CHANGE,
  currentTime,
});

export const resultTimeTableAdd = (data) => ({
  type: actionTypes.RESULT_TIMETABLE_ADD,
  data,
});

export const resultTimeTableUpdate = (index, data) => ({
  type: actionTypes.RESULT_TIMETABLE_UPDATE,
  index: index,
  data: data,
});

export const resultTimeTableDelete = (index) => ({
  type: actionTypes.RESULT_TIMETABLE_DELETE,
  index: index,
});

export const resultTimeTableSelect = (data) => ({
  type: actionTypes.RESULT_TIMETABLE_SELECT,
  data: data,
});

export const scoreInningStart = (nextInning) => ({
  type: actionTypes.SCORE_INNING_START,
  nextInning: nextInning,
});

export const scoreInningEnd = (nextInning) => ({
  type: actionTypes.SCORE_INNING_END,
  nextInning: nextInning,
});

export const inningSelectChange = (inning) => ({
  type: actionTypes.INNING_SELECT_CHANGE,
  selectedInning: inning,
});

export const omoteSelectChange = (omote) => ({
  type: actionTypes.OMOTE_SELECT_CHANGE,
  selectedOmote: omote,
});

export const keyUp = (event) => {
  return {
    type: actionTypes.KEY_UP,
    event,
  };
};

export const setBasicInformation = (isSenkou, profiles) => {
  return {
    type: actionTypes.SET_BASICINFORMATION,
    isSenkou,
    profiles,
  };
};

export const batterChange = (currentBatter) => {
  return {
    type: actionTypes.BATTER_CHANGE,
    currentBatter,
  };
};

export const batterStart = (currentBatter) => {
  return {
    type: actionTypes.BATTER_START,
    currentBatter,
  };
};

export const batterEnd = (currentBatter) => {
  return {
    type: actionTypes.BATTER_END,
    currentBatter,
  };
};

export const batterScoreChange = (scoreResult) => {
  return {
    type: actionTypes.BATTER_SCORE_CHANGE,
    scoreResult,
  };
};

export const runnerInfoAreaChange = (top, left, width, height) => {
  return {
    type: actionTypes.RUNNER_INFO_AREA_CHANGE,
    top,
    left,
    width,
    height,
  };
};
